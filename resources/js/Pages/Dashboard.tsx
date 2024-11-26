import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { PageProps } from "@/types";
import UpdatePasswordForm from "./Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Profile/Partials/UpdateProfileInformationForm";

export default function Dashboard({
    mustVerifyEmail,
    status,
    enderecos,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const [step, setStep] = useState(1);
    console.log(enderecos);
    return (
        <BaseLayout>
            <Head title="Dashboard" />
            <main className="flex gap-20">
                <div className="divide-y-2">
                    <div>
                        <button
                            onClick={() => {
                                setStep(1);
                            }}
                        >
                            Perfil
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setStep(2);
                            }}
                        >
                            Privacidade e segurança
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setStep(3);
                            }}
                        >
                            Endereços
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setStep(4);
                            }}
                        >
                            Pedidos
                        </button>
                    </div>
                    <div>
                        <Link href={route("logout")} method="post">
                            Sair
                        </Link>
                    </div>
                </div>
                <section>
                    {step === 1 && (
                        <div>
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
                        </div>
                    )}
                    {step === 3 && <div></div>}
                    {step === 4 && (
                        <div>
                            <h1>Pedidos</h1>
                            <div>
                                <div>
                                    <span>Pedidos</span>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </BaseLayout>
    );
}
