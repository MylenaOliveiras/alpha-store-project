import Carousel from "@/Components/Carousel";
import { ProductCard } from "@/Components/ProductCard";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link } from "@inertiajs/react";
import { useRef } from "react";
import ProductCarousel from "@/Components/ProductCarousel.tsx";
import type { ICategory, IProduct } from "@/types/global-types";
import { categories } from "@/Components/Footer";

interface IWelcomeProps {
    produtos: { data: IProduct[] };
    categorias: { data: ICategory[] };
}

export default function Welcome({ produtos, categorias }: IWelcomeProps) {
    const containersRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const { data: productsData } = produtos;
    const { data: categoriesData } = categorias;

    const productsWithDiscount = productsData.filter(
        (produto) => Number(produto.desconto) > 0
    );

    const filteredProductsByCategory = productsWithDiscount.filter((produto) =>
        categories.find(
            (categoria) => Number(categoria.link) === produto.categoria_id
        )
    );

    const groupByCategory = (products: IProduct[]) => {
        return products.reduce((grouped, product) => {
            const category = product.categoria_id;
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
            return grouped;
        }, {} as { [key: number]: IProduct[] });
    };

    const groupedProducts = groupByCategory(filteredProductsByCategory);

    function scrollToCategory(category: number) {
        const container = containersRef.current[category];
        const offset = 140;

        const topPosition = container
            ? container.getBoundingClientRect().top + window.scrollY - offset
            : 0;

        window.scrollTo({ top: topPosition, behavior: "smooth" });
    }

    return (
        <BaseLayout>
            <Head title="Welcome" />
            <nav className="bg-[#34c9ff] text-[#333] fixed z-100 w-full top-20 flex gap-3 items-center justify-center h-14 z-50 shadow-md">
                {categories.map((categoria) => (
                    <div
                        key={categoria.link}
                        className="relative p-2.5 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    >
                        <button
                            onClick={() =>
                                scrollToCategory(Number(categoria.link))
                            }
                            className="text-lg font-semibold text-gray-800 dark:text-gray-200"
                        >
                            {categoria.nome}
                        </button>
                    </div>
                ))}
            </nav>
            <Carousel />
            <section className="p-6 bg-darkSurface text-white text-center">
                <h2 className="text-2xl font-bold">
                    Aproveite nossos descontos!
                </h2>
                <p className="mt-2">
                    Descontos imperdíveis em diversos produtos. Não perca!
                </p>
            </section>

            <div className="flex flex-col gap-6 overflow-x-auto w-full">
                {Object.entries(groupedProducts).map(([category, products]) => (
                    <div
                        key={category}
                        id={category}
                        ref={(el) => (containersRef.current[category] = el)}
                    >
                        <div className="bg-primary p-3">
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                {
                                    categoriesData?.find(
                                        (cat) => cat.id === Number(category)
                                    )?.nome
                                }
                            </h1>
                        </div>
                        <ProductCarousel>
                            {products.map((produto) => (
                                <ProductCard
                                    key={produto.id}
                                    produto={produto}
                                />
                            ))}
                        </ProductCarousel>
                    </div>
                ))}
            </div>
            <section className="flex items-center gap-20 justify-center my-6">
                <Link href={`produtos/categoria/171`}>
                    <div className="rounded-md p-10 shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] dark:shadow-[rgba(0,0,0,0.5)_0px_50px_100px_-20px,rgba(0,0,0,0.7)_0px_30px_60px_-30px,rgba(0,0,0,0.8)_0px_-2px_6px_0px_inset] hover:scale-95 transition-transform duration-150 ease-in-out">
                        <span className="text-3xl text-darkSurface dark:text-cream font-extrabold">
                            Notebooks
                        </span>
                    </div>
                </Link>

                <Link href={`produtos/categoria/170`}>
                    <div className="rounded-md p-10 shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] dark:shadow-[rgba(0,0,0,0.5)_0px_50px_100px_-20px,rgba(0,0,0,0.7)_0px_30px_60px_-30px,rgba(0,0,0,0.8)_0px_-2px_6px_0px_inset] hover:scale-95 transition-transform duration-150 ease-in-out">
                        <span className="text-3xl text-darkSurface dark:text-cream font-extrabold">
                            Monitores
                        </span>
                    </div>
                </Link>
                <Link href={`produtos/categoria/169`}>
                    <div className="rounded-md p-10 shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] dark:shadow-[rgba(0,0,0,0.5)_0px_50px_100px_-20px,rgba(0,0,0,0.7)_0px_30px_60px_-30px,rgba(0,0,0,0.8)_0px_-2px_6px_0px_inset] hover:scale-95 transition-transform duration-150 ease-in-out">
                        <span className="text-3xl text-darkSurface dark:text-cream font-extrabold">
                            Hardwares
                        </span>
                    </div>
                </Link>
            </section>
            <div className="p-6 bg-blue-950 mt-2">
                <h3 className="font-bold text-gray-400">
                    Aproveite nossas ofertas!
                </h3>
                <span className="text-gray-500">
                    Compre agora e ganhe 10% de desconto em sua primeira compra
                </span>
            </div>
        </BaseLayout>
    );
}
