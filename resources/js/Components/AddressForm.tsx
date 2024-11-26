import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import type { FormEventHandler } from "react";

interface IAddressProps {
    handleSubmit?: () => void;
    onCancel?: () => void;
}

export function AddressForm({ handleSubmit, onCancel }: IAddressProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nome: "",
        logradouro: "",
        numero: "",
        complemento: "",
        cidade: "",
        estado: "",
        cep: "",
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route("finalizarPedido.endereco.salvar"), {
            onSuccess: () => {
                console.log("Endereço salvo com sucesso!");
                reset();
                if (handleSubmit) {
                    handleSubmit();
                }
            },
            onError: (errors) => {
                console.error("Erro ao salvar endereço:", errors);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <section className="grid grid-cols-2 gap-4">
                <div>
                    <InputLabel htmlFor="nome" value="Nome" />
                    <TextInput
                        id="nome"
                        name="nome"
                        value={data.nome}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("nome", e.target.value)}
                        required
                    />
                    <InputError message={errors?.nome} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="logradouro" value="Logradouro" />
                    <TextInput
                        id="logradouro"
                        name="logradouro"
                        value={data.logradouro}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("logradouro", e.target.value)}
                        required
                    />
                    <InputError message={errors?.logradouro} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="numero" value="Número" />
                    <TextInput
                        id="numero"
                        name="numero"
                        value={data.numero}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("numero", e.target.value)}
                        required
                    />
                    <InputError message={errors?.numero} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="cidade" value="Cidade" />
                    <TextInput
                        id="cidade"
                        name="cidade"
                        value={data.cidade}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("cidade", e.target.value)}
                        required
                    />
                    <InputError message={errors?.cidade} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="estado" value="Estado" />
                    <TextInput
                        id="estado"
                        name="estado"
                        value={data.estado}
                        className="mt-1 block w-full"
                        maxLength={2}
                        pattern="[A-Za-z]{2}"
                        onChange={(e) => setData("estado", e.target.value)}
                        required
                    />
                    <InputError message={errors?.estado} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="cep" value="CEP" />
                    <TextInput
                        id="cep"
                        name="cep"
                        value={data.cep}
                        className="mt-1 block w-full"
                        maxLength={8}
                        onChange={(e) => setData("cep", e.target.value)}
                        required
                    />
                    <InputError message={errors?.cep} className="mt-2" />
                </div>

                <div className="col-span-2">
                    <InputLabel htmlFor="complemento" value="Complemento" />
                    <TextInput
                        id="complemento"
                        name="complemento"
                        value={data.complemento}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("complemento", e.target.value)}
                        required
                    />
                    <InputError message={errors?.cidade} className="mt-2" />
                </div>
            </section>

            <footer className="flex  justify-between">
                {onCancel && (
                    <PrimaryButton
                        className="flex justify-center  text-center mt-6"
                        onClick={() => {
                            reset();
                            onCancel();
                        }}
                    >
                        Cancelar
                    </PrimaryButton>
                )}
                <PrimaryButton
                    className="flex justify-center  text-center mt-6"
                    disabled={processing || data.logradouro === ""}
                >
                    Salvar
                </PrimaryButton>
            </footer>
        </form>
    );
}
