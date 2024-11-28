import { formatDate } from "@/Components/Pedido";
import BaseLayout from "@/Layouts/BaseLayout";
import { formatPrice } from "@/utils";
import { Head, Link } from "@inertiajs/react";
import { formatCep } from "../FinalizarPedido/Address";
import type { IAddress, IOrder, IProduct } from "@/types/global-types";

type PedidoDetalhes = {
    id: number;
    data: string;
    status: {
        id: number;
        descricao: string;
    };
    itens: {
        pedido_id: number;
        quantidade: number;
        produto: IProduct;
    }[];
    endereco: IAddress;
};
interface IPedidoDetalhes {
    pedido: PedidoDetalhes;
}

const PedidoDetalhes = ({ pedido }: IPedidoDetalhes) => {
    if (!pedido)
        return (
            <div className="text-center text-xl text-red-500">
                Pedido não encontrado
            </div>
        );

    const priceWithDiscount = (produto: IProduct) => {
        return Number(produto.preco) - (Number(produto.desconto) || 0);
    };

    const calcularValorTotal = (itens: PedidoDetalhes["itens"]) => {
        const totalItens = itens.reduce(
            (total, item) =>
                total + priceWithDiscount(item.produto) * item.quantidade,
            0
        );
        const valorFrete = 15;
        return totalItens + valorFrete;
    };

    const calculateDiscount = (itens: PedidoDetalhes["itens"]) => {
        return itens.reduce(
            (total, item) =>
                total + (Number(item.produto.desconto) || 0) * item.quantidade,
            0
        );
    };

    return (
        <BaseLayout>
            <Head title="Detalhes do Pedido" />
            <div className="container mx-auto p-8">
                <Link
                    href="/dashboard"
                    className="text-blue-500 hover:underline mb-4 inline-block"
                >
                    &larr; Voltar aos pedidos
                </Link>
                <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Detalhes do Pedido
                </h1>

                <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl">
                    <div className="mb-8 flex flex-col gap-3 items-start">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Pedido Nº: {pedido.id}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Data do pedido: {formatDate(pedido.data)}
                        </p>
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                pedido.status.id === 1
                                    ? "bg-blue-100 text-blue-700"
                                    : pedido.status.id === 2
                                    ? "bg-yellow-100 text-yellow-700"
                                    : pedido.status.id === 3
                                    ? "bg-green-100 text-green-700"
                                    : pedido.status.id === 4
                                    ? "bg-red-100 text-red-700"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {pedido.status.descricao}
                        </span>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Itens do Pedido
                        </h3>
                        <ul className="list-none space-y-6">
                            {pedido.itens.map((item) => (
                                <li
                                    key={item.pedido_id}
                                    className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md transition hover:shadow-xl"
                                >
                                    <img
                                        src={item.produto.imagens[0]}
                                        alt={item.produto.nome}
                                        className="w-20 h-20 rounded-lg mr-6 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg text-gray-800 dark:text-white">
                                            {item.produto.nome}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {item.quantidade}x - R$
                                            {formatPrice(
                                                priceWithDiscount(
                                                    item.produto
                                                ).toString()
                                            )}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Endereço de Entrega
                        </h3>
                        <div className="flex gap-3">
                            <p className="text-gray-600 dark:text-gray-300">
                                {pedido.endereco.logradouro},{" "}
                                {pedido.endereco.numero}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {pedido.endereco.cidade} -{" "}
                                {pedido.endereco.estado}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                CEP: {formatCep(pedido.endereco.cep)}
                            </p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="mb-8">
                        <div className="py-2">
                            <span className="text-xl font-semibold text-gray-900 dark:text-white block">
                                Valor total do Pedido
                            </span>
                            <div className="text-gray-600 dark:text-gray-300 mt-2">
                                <p>Frete: R$15,00</p>
                                <p>
                                    Descontos aplicados:{" "}
                                    {formatPrice(
                                        calculateDiscount(
                                            pedido.itens
                                        ).toString()
                                    )}
                                </p>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                                {formatPrice(
                                    calcularValorTotal(pedido.itens).toString()
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default PedidoDetalhes;
