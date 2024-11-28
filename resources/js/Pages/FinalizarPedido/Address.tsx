import { AddressForm } from "@/Components/AddressForm";
import PrimaryButton from "@/Components/PrimaryButton";
import type { IAddress } from "@/types/global-types";
import { Inertia } from "@inertiajs/inertia";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

interface IAddressProps {
    enderecos: {
        data: IAddress[];
    };
    proximaEtapa: () => void;
    enderecoSelecionado: number | null;
    setEnderecoSelecionado: (endereco_id: number | null) => void;
}

export const formatCep = (cep: string) => {
    return `${cep.slice(0, 5)}-${cep.slice(5)}`;
};

export const handleDelete = async (endereco_id: number) => {
    try {
        Inertia.delete(`/finalizarPedido/endereco/deletar/${endereco_id}`, {
            onSuccess: (page) => {
                console.log("Endereço deletado com sucesso!");
            },
        });
    } catch (error) {
        console.error("Erro ao se conectar com o servidor:", error);
    }
};

export const Address = ({
    enderecos,
    proximaEtapa,
    enderecoSelecionado,
    setEnderecoSelecionado,
}: IAddressProps) => {
    const [showForm, setShowForm] = useState(false);

    const handleSelectAddress = (id: number) => {
        setEnderecoSelecionado(id);
    };

    const showOptions = enderecos.data.length > 0 && !showForm;

    return (
        <>
            {showOptions && (
                <section className="dark:bg-darkBackground">
                    {enderecos.data.map((endereco) => (
                        <div
                            key={endereco.id}
                            className={`border border-gray-200 p-4 rounded-md mb-4 ${
                                enderecoSelecionado === endereco.id
                                    ? "bg-blue-100 dark:bg-gray-700"
                                    : ""
                            }`}
                        >
                            <div className="flex justify-between items-center text-darkSurface dark:text-cream">
                                <input
                                    className="checked:bg-primary-light hover:bg-primary checked:border-transparent rounded-lg"
                                    type="checkbox"
                                    checked={
                                        enderecoSelecionado === endereco.id
                                    }
                                    onChange={() =>
                                        handleSelectAddress(endereco.id)
                                    }
                                />
                                <span>{endereco.nome}</span>
                                <span>
                                    {endereco.logradouro}, {endereco.numero}
                                </span>
                                <span>
                                    {endereco.cidade} - {endereco.estado}
                                </span>
                                <span>{formatCep(endereco.cep)}</span>
                                <button
                                    onClick={() => handleDelete(endereco.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Delete />
                                </button>
                            </div>
                        </div>
                    ))}
                    <footer className="flex justify-between text-darkSurface dark:text-cream">
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setEnderecoSelecionado(null);
                            }}
                        >
                            Adicionar novo endereco
                        </button>
                        <PrimaryButton
                            disabled={!enderecoSelecionado}
                            onClick={() => proximaEtapa()}
                        >
                            Proximo
                        </PrimaryButton>
                    </footer>
                </section>
            )}

            {!showOptions && (
                <AddressForm
                    handleSubmit={() => {
                        setShowForm(false);
                    }}
                    onCancel={() => setShowForm(false)}
                />
            )}
        </>
    );
};
