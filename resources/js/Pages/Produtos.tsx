import React from "react";
import { Inertia } from "@inertiajs/inertia";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";

const Produtos = ({ produtos }) => {
    const adicionarAoCarrinho = async (
        produto_id: number,
        quantidade: number
    ) => {
        try {
            await Inertia.post(
                `/carrinho/adicionar`,
                {
                    produto_id,
                    quantidade,
                },
                {
                    onSuccess: (page) => {
                        console.log(page.props.carrinho);
                        Inertia.visit(route("carrinho.index"));
                    },
                }
            );
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho", error);
        }
    };

    const handleAddToCart = (
        event: React.MouseEvent<HTMLButtonElement>,
        produto_id: number,
        quantidade: number
    ) => {
        event.preventDefault();
        adicionarAoCarrinho(produto_id, quantidade);
    };

    return (
        <BaseLayout>
            <Head title="Produtos" />

            <h2>Produtos Disponíveis</h2>
            {produtos.data.map((produto) => (
                <div key={produto.id}>
                    <h3>{produto.nome}</h3>
                    <p>Preço: R$ {produto.preco}</p>
                    <button
                        onClick={(event) =>
                            handleAddToCart(event, produto.id, 1)
                        }
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </BaseLayout>
    );
};

export default Produtos;
