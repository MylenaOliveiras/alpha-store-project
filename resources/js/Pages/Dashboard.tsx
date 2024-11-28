import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { PageProps } from "@/types";
import UpdatePasswordForm from "./FinalizarPedido/UpdatePasswordForm";
import UpdateProfileInformationForm from "./FinalizarPedido/UpdateProfileInformationForm";
import { Delete } from "@mui/icons-material";
import { DashboardMenu } from "@/Components/DashboardMenu";
import type { IAddress, IOrder } from "@/types/global-types";
import { formatCep, handleDelete } from "./FinalizarPedido/Address";
import { AddressForm } from "@/Components/AddressForm";
import Pedido from "@/Components/Pedido";

export default function Dashboard({
    mustVerifyEmail,
    status,
    enderecos,
    pedidos,
}: PageProps<{
    mustVerifyEmail: boolean;
    enderecos: { data: IAddress[] };
    status?: string;
    pedidos: { data: IOrder[] };
}>) {
    const [step, setStep] = useState(1);
    const [showForm, setShowForm] = useState(false);

    const pedido = pedidos.data.map((p) => {
        return {
            ...p,
            endereco: enderecos.data.find((e) => e.id === p.endereco_id),
        };
    });

    useEffect(() => {
        if (enderecos.data.length === 0) {
            setShowForm(true);
        }
    }, []);

    console.log(pedido);

    return (
        <BaseLayout>
            <Head title="Dashboard" />
            <main className="flex gap-20 p-10">
                <DashboardMenu setStep={setStep} step={step} />
                <section className="min-w-[600px]">
                    {step === 1 && (
                        <div>
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="w-[600px]"
                                />
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                                <UpdatePasswordForm className="w-[600px]" />
                            </div>
                        </div>
                    )}
                    {step === 3 &&
                        (showForm ? (
                            <div>
                                <AddressForm
                                    handleSubmit={() => setShowForm(false)}
                                    onCancel={() => {
                                        setShowForm(false);
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {enderecos.data.map((e) => {
                                    return (
                                        <div className="flex justify-between items-center text-darkSurface dark:text-cream border-2 border-gray-500 rounded-md p-3 space-x-5">
                                            <span>{e.nome}</span>
                                            <span>
                                                {e.logradouro}, {e.numero}
                                            </span>
                                            <span>
                                                {e.cidade} - {e.estado}
                                            </span>
                                            <span>{formatCep(e.cep)}</span>
                                            <button
                                                onClick={() =>
                                                    handleDelete(e.id)
                                                }
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Delete />
                                            </button>
                                        </div>
                                    );
                                })}
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                    }}
                                    className="dark:text-cream"
                                >
                                    Adicionar novo endereço
                                </button>
                            </div>
                        ))}
                    {step === 4 && (
                        <div>
                            {pedido.length > 0 ? (
                                pedido.map((p) => (
                                    <Pedido pedido={p} key={p.id} />
                                ))
                            ) : (
                                <div className="text-darkSurface dark:text-cream w-full text-center">
                                    <span>Ainda não fez nenhum pedido :/</span>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>
        </BaseLayout>
    );
}
