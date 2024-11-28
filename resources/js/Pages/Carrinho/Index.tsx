import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { CartItem } from "./components/CartItem";
import BaseLayout from "@/Layouts/BaseLayout";
import { Inertia } from "@inertiajs/inertia";
import { formatPrice } from "@/utils";
import type { ICart } from "@/types/global-types";

interface ICartItens {
    carrinho: {
        data: ICart[];
    };
}

export default function Carrinho({ carrinho }: ICartItens) {
    const [cart, setCart] = useState(carrinho.data);
    const [totals, setTotals] = useState({
        subtotal: 0,
        frete: 15.0,
        descontos: 0,
        total: 0,
    });

    useEffect(() => {
        const subtotal = cart.reduce(
            (sum, item) =>
                sum + parseFloat(item.produto.preco) * item.quantidade,
            0
        );

        const descontos = cart.reduce(
            (sum, item) =>
                sum + parseFloat(item.produto.desconto) * item.quantidade,
            0
        );

        const total = subtotal + totals.frete - descontos;

        setTotals((prev) => ({ ...prev, subtotal, total, descontos }));
    }, [cart, totals.frete]);

    const removerItem = async (produto_id: number) => {
        try {
            Inertia.delete(`/carrinho/remover/${produto_id}`, {
                onSuccess: (page) => {
                    setCart(page.props.carrinho.data);
                    Inertia.reload({ preserveState: true });
                },
            });
        } catch (error) {
            console.error("Erro ao se conectar com o servidor:", error);
        }
    };

    const atualizarQuantidade = async (
        produto_id: number,
        quantidade: number
    ) => {
        try {
            Inertia.patch(
                `/carrinho/atualizar/${produto_id}`,
                {
                    quantidade: quantidade,
                },
                {
                    onSuccess: (page) => {
                        setCart(page.props.carrinho.data);
                        Inertia.reload({ preserveState: true });
                    },
                }
            );
        } catch (error) {
            console.error("Erro ao se conectar com o servidor:", error);
        }
    };

    return (
        <BaseLayout>
            <Head title="Carrinho" />
            <h1 className="font-bold text-3xl pt-6 text-center dark:text-primary-dark text-primary-light">
                Meu Carrinho
            </h1>
            <div className="p-6 flex flex-col lg:flex-row justify-between gap-8">
                <section className="shadow-lg p-6 rounded-lg w-full lg:w-2/3 bg-lightSurface dark:bg-gray-800">
                    <h2 className="font-semibold text-xl mb-4 text-gray-700 dark:text-cream">
                        Produtos
                    </h2>
                    <div className="divide-y-2">
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <CartItem
                                    key={item.produto_id}
                                    item={item}
                                    onRemove={() =>
                                        removerItem(item.produto_id)
                                    }
                                    onQuantityUpdate={atualizarQuantidade}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-8">
                                <p>Seu carrinho está vazio.</p>
                                <Link href="/produtos">
                                    <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                                        Continuar comprando
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
                <section className="p-6 divide-y-2 bg-gray-100 dark:bg-gray-800 w-full lg:w-96 rounded-lg shadow-lg max-h-[436px]">
                    <h2 className="font-semibold text-lg pb-3 text-gray-700 dark:text-cream">
                        Resumo da Compra
                    </h2>
                    {cart.length > 0 ? (
                        <>
                            <div className="space-y-4 py-6">
                                <div className="flex justify-between text-sm text-gray-700 dark:text-cream">
                                    <span>Subtotal</span>
                                    <span>
                                        {formatPrice(
                                            totals.subtotal.toString()
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700 dark:text-cream">
                                    <span>Frete</span>
                                    <span>
                                        {formatPrice(totals.frete.toString())}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm text-red-500">
                                    <span>Descontos</span>
                                    <span>
                                        -{" "}
                                        {formatPrice(
                                            totals.descontos.toString()
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="flex justify-between items-center font-bold text-lg text-gray-700 dark:text-cream">
                                    <span>Total</span>
                                    <span>
                                        {formatPrice(totals.total.toString())}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pt-5">
                                <Link href="/finalizarPedido">
                                    <button className="w-full py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                                        Finalizar Pedido
                                    </button>
                                </Link>
                                <Link href="/produtos">
                                    <button className="w-full py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                                        Continuar comprando
                                    </button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="py-6 text-center text-gray-500">
                            <p>
                                Adicione alguns produtos ao carrinho para
                                continuar.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </BaseLayout>
    );
}
