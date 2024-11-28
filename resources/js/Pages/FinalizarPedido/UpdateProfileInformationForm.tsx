import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function UpdateProfileInformation({
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            USUARIO_NOME: user.USUARIO_NOME,
            USUARIO_EMAIL: user.USUARIO_EMAIL,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Informações do perfil
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Atualize as informações do seu perfil e email.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nome" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.USUARIO_NOME}
                        onChange={(e) =>
                            setData("USUARIO_NOME", e.target.value)
                        }
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.USUARIO_NOME}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.USUARIO_EMAIL}
                        onChange={(e) =>
                            setData("USUARIO_EMAIL", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.USUARIO_EMAIL}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Salvar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Salvo.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
