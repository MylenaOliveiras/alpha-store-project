import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";
import { Phone, WhatsApp } from "@mui/icons-material";
import React from "react";

const Institucional: React.FC = () => {
    return (
        <BaseLayout>
            <Head title="SAC" />

            <div className="p-6 bg-primary text-white dark:text-gray-200 shadow-lg">
                <h1 className="text-3xl font-extrabold mb-4">SAC</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="p-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 dark:text-cream">
                            Clique em uma das opções.
                        </h2>
                        <section className="mb-6 border shadow-lg rounded-lg p-10 justify-center max-w-[800px] dark:bg-gray-800 dark:border-gray-700">
                            <p className="text-lg mb-4 dark:text-gray-200">
                                Estamos à disposição para atendê-lo de forma
                                rápida e eficiente. Nossos consultores estão
                                prontos para ajudar com qualquer dúvida,
                                solicitação ou suporte que você precise.
                            </p>
                            <div className="flex justify-between">
                                <div className="flex items-center mb-4 p-10 border-gray-600 border rounded-lg text-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
                                    <Phone
                                        fontSize="large"
                                        className="text-blue-500"
                                    />
                                    <span className="ml-2">0800 000 0000</span>
                                </div>

                                <div className="flex items-center mb-4 p-10 border-gray-600 border rounded-lg text-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
                                    <WhatsApp
                                        fontSize="large"
                                        className="text-green-500"
                                    />
                                    <span className="ml-2">
                                        (11) 90000-0000
                                    </span>
                                </div>
                            </div>
                        </section>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 dark:text-cream">
                                Formulário de Contato
                            </h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(
                                        formData.entries()
                                    );
                                    console.log(data);
                                    form.reset();
                                }}
                                className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800"
                            >
                                <div className="mb-4">
                                    <label
                                        className="block text-lg mb-2 dark:text-gray-200"
                                        htmlFor="name"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        className="w-full p-2 border border-gray-300 rounded shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg mb-2 dark:text-gray-200"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full p-2 border border-gray-300 rounded shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg mb-2 dark:text-gray-200"
                                        htmlFor="message"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        className="w-full p-2 border border-gray-300 rounded shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Institucional;
