import React from "react";
import { Inertia } from "@inertiajs/inertia";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";
import { ProductCard } from "@/Components/ProductCard";
import type { ICategory, IProduct } from "@/types/global-types";
import ProductCarousel from "@/Components/ProductCarousel.tsx";

interface IProduto {
    produtos: { data: IProduct[] };
    categorias: { data: ICategory[] };
}

const Produtos = ({ produtos, categorias }: IProduto) => {
    const groupByCategory = (products: IProduct[]) => {
        if (!products) return {};
        return products.reduce((grouped, product) => {
            const category = product.categoria_id;
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
            return grouped;
        }, {} as { [key: number]: IProduct[] });
    };

    const groupedProducts = groupByCategory(produtos.data);

    return (
        <BaseLayout>
            <Head title="Produtos" />
            <section className="py-4">
                {produtos.data && categorias ? (
                    <div className="flex flex-col gap-6 overflow-x-auto w-full">
                        {Object.entries(groupedProducts).map(
                            ([category, products]) => (
                                <div key={category} id={category}>
                                    <div className="bg-primary p-3">
                                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                            {
                                                categorias.data?.find(
                                                    (cat) =>
                                                        cat.id ===
                                                        Number(category)
                                                )?.nome
                                            }
                                        </h1>
                                    </div>
                                    {categorias.data.length > 1 ? (
                                        <ProductCarousel>
                                            {products.map((produto) => (
                                                <ProductCard
                                                    key={produto.id}
                                                    produto={produto}
                                                />
                                            ))}
                                        </ProductCarousel>
                                    ) : (
                                        <div className="grid grid-cols-4 justify-items-center gap-10 my-10 px-6">
                                            {products.map((produto) => (
                                                <ProductCard
                                                    key={produto.id}
                                                    produto={produto}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <div className="text-center min-h-full p-10 py-40">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            Nenhum produto disponível
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Ops, não encontramos o que você procura. Dê uma
                            olhada em outros produtos disponíveis em nosso site.
                        </p>
                    </div>
                )}
            </section>
        </BaseLayout>
    );
};

export default Produtos;
