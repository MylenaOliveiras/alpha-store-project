import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import {
    ArrowBack,
    Assignment,
    CheckCircle,
    CreditCard,
    Delete,
    LocalShipping,
} from "@mui/icons-material";
import { AddressForm } from "@/Components/AddressForm";
import type { IAddress } from "@/types/global-types";
import { Inertia } from "@inertiajs/inertia";
import PrimaryButton from "@/Components/PrimaryButton";
import { Address } from "./Address";

interface IFinalizarPedidoProps {
    enderecos: { data: IAddress[] };
}

export default function FinalizarPedido({ enderecos }: IFinalizarPedidoProps) {
    const [etapa, setEtapa] = useState(1);
    const [pagamento, setPagamento] = useState("");
    const [concluido, setConcluido] = useState(false);
    const [enderecoSelecionado, setEnderecoSelecionado] = useState<
        number | null
    >(null);

    const proximaEtapa = () => {
        if (etapa < 3) setEtapa(etapa + 1);
    };

    const finalizarPedido = () => {
        Inertia.post(
            route("pedidos.finalizar"),
            {
                endereco_id: enderecoSelecionado,
            },
            {
                onSuccess: () => {
                    setConcluido(true);
                    Inertia.reload({ preserveState: true });
                },
                onError: (errors) => {
                    console.error("Erro ao finalizar pedido:", errors);
                },
            }
        );
    };

    console.log(enderecoSelecionado);

    return (
        <BaseLayout>
            <Head title="Finalizar Pedido" />
            <h1 className="font-bold text-3xl text-center py-6 text-gray-800">
                Finalizar Pedido
            </h1>

            <div className="relative mb-8 mx-32">
                <div className="absolute top-5 w-full h-1 bg-gray-200">
                    <div
                        className="h-full bg-primary-light transition-all duration-500"
                        style={{ width: `${((etapa - 1) / 2) * 100}%` }}
                    />
                </div>
                <div className="relative flex justify-between">
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                etapa >= 1
                                    ? "bg-primary-light text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <LocalShipping className="w-6 h-6" />
                        </div>
                        <span className="mt-2 text-sm font-medium">
                            Entrega
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                etapa >= 2
                                    ? "bg-primary-light text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <span className="mt-2 text-sm font-medium">
                            Pagamento
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                etapa === 3
                                    ? "bg-primary-light text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            {concluido ? (
                                <CheckCircle className="w-6 h-6" />
                            ) : (
                                <Assignment className="w-6 h-6" />
                            )}
                        </div>
                        <span className="mt-2 text-sm font-medium">Resumo</span>
                    </div>
                </div>
            </div>
            <div className="p-6 flex flex-col lg:flex-row gap-8 justify-center">
                <section className="w-full lg:w-2/3 p-6 bg-white  pt-0">
                    {etapa === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Endereço de Entrega
                            </h3>
                            <Address
                                enderecos={enderecos}
                                proximaEtapa={proximaEtapa}
                                enderecoSelecionado={enderecoSelecionado}
                                setEnderecoSelecionado={setEnderecoSelecionado}
                            />
                        </div>
                    )}

                    {etapa === 2 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Forma de Pagamento
                            </h3>
                            <select
                                value={pagamento}
                                onChange={(e) => setPagamento(e.target.value)}
                                className="w-full p-3 mb-4 border rounded-md"
                            >
                                <option value="">
                                    Escolha uma forma de pagamento
                                </option>
                                <option value="cartao">
                                    Cartão de Crédito
                                </option>
                                <option value="boleto">Boleto Bancário</option>
                                <option value="pix">PIX</option>
                            </select>
                            <button
                                onClick={proximaEtapa}
                                className="mt-4 py-2 px-6 bg-primary-light text-white rounded-md w-full hover:bg-blue-600 transition duration-300"
                            >
                                Próxima Etapa
                            </button>
                        </div>
                    )}

                    {etapa === 3 && !concluido && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Resumo do Pedido
                            </h3>
                            <div className="mb-4">
                                <p>
                                    <strong>Endereço:</strong>
                                </p>
                                <p>
                                    <strong>Forma de Pagamento:</strong>{" "}
                                    {pagamento}
                                </p>
                            </div>
                            <button
                                onClick={finalizarPedido}
                                className="py-2 px-6 bg-green-500 text-white rounded-md w-full hover:bg-green-600 transition duration-300"
                            >
                                Finalizar Pedido
                            </button>
                        </div>
                    )}

                    {concluido && (
                        <div className="text-center py-8">
                            <h3 className="text-2xl font-semibold text-green-500">
                                Pedido Concluído!
                            </h3>
                            <p className="mt-4">
                                Seu pedido foi finalizado com sucesso.
                                Agradecemos pela compra!
                            </p>
                            <Link href="/produtos">
                                <button className="mt-4 py-2 px-6 bg-primary-light text-white rounded-md w-full hover:bg-blue-600 transition duration-300">
                                    Voltar para a Loja
                                </button>
                            </Link>
                        </div>
                    )}

                    <button
                        onClick={
                            etapa > 1 ? () => setEtapa(etapa - 1) : undefined
                        }
                        className="mt-8 text-primary-light cursor-pointer flex items-center gap-2"
                        style={{ display: etapa === 1 ? "none" : "flex" }}
                    >
                        <ArrowBack />
                        Voltar para{" "}
                        {etapa === 1
                            ? "a loja"
                            : etapa === 2
                            ? "o endereço"
                            : "o pagamento"}
                    </button>
                </section>
            </div>
        </BaseLayout>
    );
}
