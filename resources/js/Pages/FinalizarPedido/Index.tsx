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
import type { IAddress, ICart } from "@/types/global-types";
import { Inertia } from "@inertiajs/inertia";
import PrimaryButton from "@/Components/PrimaryButton";
import { Address } from "./Address";
import { Steps } from "../Carrinho/components/Steps";
import { PaymentMethod } from "./PaymentMethod";
import { ResumoPedido } from "./Resumo";

interface IFinalizarPedidoProps {
    enderecos: { data: IAddress[] };
    resumoPedido: { data: ICart[] };
}

export default function FinalizarPedido({
    enderecos,
    resumoPedido,
}: IFinalizarPedidoProps) {
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
                },
                onError: (errors) => {
                    console.error("Erro ao finalizar pedido:", errors);
                },
            }
        );
    };

    const findAddress = (id: number) => {
        return enderecos.data.find((endereco) => endereco.id === id);
    };

    return (
        <BaseLayout>
            <Head title="Finalizar Pedido" />
            <h1 className="font-bold text-3xl text-center py-6 text-gray-800 dark:text-primary-dark">
                Finalizar Pedido
            </h1>
            <Steps etapa={etapa} concluido={concluido} />

            <div className="p-6 flex flex-col lg:flex-row gap-8 justify-center">
                <section className="w-full lg:w-2/3 p-6 bg-white  pt-0 dark:bg-darkBackground">
                    {etapa === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-darkSurface dark:text-cream">
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
                            <h3 className="text-xl font-semibold mb-4 text-darkSurface dark:text-cream">
                                Forma de Pagamento
                            </h3>
                            <PaymentMethod
                                setPagamento={setPagamento}
                                pagamento={pagamento}
                            />
                            <PrimaryButton
                                disabled={pagamento === ""}
                                onClick={proximaEtapa}
                                className="mt-4 py-2 px-6 bg-primary-light text-white rounded-md w-full hover:bg-blue-600 transition duration-300 flex justify-center"
                            >
                                Próxima Etapa
                            </PrimaryButton>
                        </div>
                    )}

                    {etapa === 3 && !concluido && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-darkSurface dark:text-cream">
                                Resumo do Pedido
                            </h3>
                            <ResumoPedido carrinho={resumoPedido} />
                            <div className="mb-4">
                                <p className="text-darkSurface dark:text-cream">
                                    <strong>Endereço:</strong>{" "}
                                    {enderecoSelecionado !== null ? (
                                        <>
                                            {
                                                findAddress(enderecoSelecionado)
                                                    ?.logradouro
                                            }
                                            ,{" "}
                                            {
                                                findAddress(enderecoSelecionado)
                                                    ?.numero
                                            }
                                            ,{" "}
                                            {
                                                findAddress(enderecoSelecionado)
                                                    ?.cidade
                                            }{" "}
                                            -{" "}
                                            {
                                                findAddress(enderecoSelecionado)
                                                    ?.estado
                                            }
                                        </>
                                    ) : (
                                        "Nenhum endereço selecionado"
                                    )}
                                </p>
                                <p className="text-darkSurface dark:text-cream">
                                    <strong>Forma de Pagamento:</strong>{" "}
                                    {pagamento}
                                </p>
                            </div>
                            <button
                                onClick={finalizarPedido}
                                className="py-2 px-6 bg-green-500 text-white rounded-md w-full hover:bg-green-600 transition duration-300 "
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
                        className="mt-8 text-darkSurface dark:text-cream cursor-pointer flex items-center gap-2"
                        style={{ display: etapa === 1 ? "none" : "flex" }}
                    >
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
