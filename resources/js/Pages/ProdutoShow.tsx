import BaseLayout from "@/Layouts/BaseLayout";
import { useState } from "react";
import { ShoppingCart } from "@mui/icons-material"; // Ícone para o botão de adicionar ao carrinho
import { formatPrice } from "@/utils";
import type { IProduct } from "@/types/global-types";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";

interface IProduto {
    produto: {
        data: IProduct;
    };
}

export default function ProdutoShow({ produto }: IProduto) {
    const [selectedImage, setSelectedImage] = useState(produto.data.imagens[0]);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const avaliacoes = [
        {
            usuario: "João",
            estrelas: 5,
            comentario: "Produto excelente, recomendo!",
        },
        {
            usuario: "Maria",
            estrelas: 4,
            comentario: "Muito bom, entrega rápida.",
        },
        {
            usuario: "José",
            estrelas: 3,
            comentario: "Poderia ser melhor.",
        },
    ];

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
            <Head title="Produto" />

            <div className="max-w-screen-xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex justify-center items-center gap-10">
                        <div className="flex flex-col gap-4 mb-4">
                            {produto.data.imagens.map((imagem, index) => (
                                <img
                                    key={index}
                                    src={imagem}
                                    alt={produto.data.nome}
                                    className="w-20 h-20 rounded-lg shadow-lg cursor-pointer"
                                    onClick={() => handleImageClick(imagem)}
                                />
                            ))}
                        </div>
                        <img
                            src={selectedImage}
                            alt={produto.data.nome}
                            className="w-full h-96 max-w-md rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            {produto.data.nome}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            {produto.data.descricao}
                        </p>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Estoque:
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {produto.data.estoque > 0
                                    ? `${produto.data.estoque} unidades disponíveis`
                                    : "Produto esgotado"}
                            </p>
                        </div>

                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex items-center">
                                {Number(produto.data.desconto) > 0 && (
                                    <span className="text-3xl font-semibold text-green-600 dark:text-green-400 mr-2">
                                        {formatPrice(
                                            (
                                                Number(produto.data.preco) -
                                                Number(produto.data.desconto)
                                            ).toString()
                                        )}
                                    </span>
                                )}
                                <div className="flex flex-col items-center ">
                                    {Number(produto.data.desconto) > 0 ? (
                                        <span className="text-xl line-through text-red-600 dark:text-red-400">
                                            {formatPrice(produto.data.preco)}
                                        </span>
                                    ) : (
                                        <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                            {formatPrice(produto.data.preco)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                className="flex items-center gap-2 bg-cyan-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-300 text-center w-60"
                                disabled={produto.data.estoque <= 0}
                                onClick={(event) =>
                                    handleAddToCart(event, produto.data.id, 1)
                                }
                            >
                                <ShoppingCart />
                                {produto.data.estoque > 0
                                    ? "Adicionar no carrinho"
                                    : "Indisponível"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10"></div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Avaliações
                </h2>
                <div className="space-y-6">
                    {avaliacoes.map((avaliacao, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-lg shadow-md"
                        >
                            <div className="flex items-center mb-2">
                                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {avaliacao.usuario}
                                </span>
                                <span className="ml-2 text-yellow-500">
                                    {"★".repeat(avaliacao.estrelas)}
                                    {"☆".repeat(5 - avaliacao.estrelas)}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {avaliacao.comentario}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </BaseLayout>
    );
}
