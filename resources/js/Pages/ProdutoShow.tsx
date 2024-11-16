import BaseLayout from "@/Layouts/BaseLayout";
import { useState } from "react";
import { ShoppingCart } from "@mui/icons-material"; // Ícone para o botão de adicionar ao carrinho

export default function ProdutoShow({ produto }) {
    const [selectedImage, setSelectedImage] = useState(produto.data.imagens[0]);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    console.log(produto);

    return (
        <BaseLayout>
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
                            <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                R${produto.data.preco}
                            </span>
                            <button
                                className="flex items-center gap-2 bg-cyan-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-300 text-center w-40"
                                disabled={produto.data.estoque <= 0}
                            >
                                <ShoppingCart />
                                {produto.data.estoque > 0
                                    ? "Comprar"
                                    : "Indisponível"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
