import Carousel from "@/Components/Carousel";
import { ProductCard } from "@/Components/ProductCard";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useRef } from "react";
import type { IProduct, ICategory } from "./utils";
import ProductCarousel from "@/Components/ProductCarousel.tsx";
interface IWelcomeProps {
    produtos: { data: IProduct[] };
    categorias: { data: ICategory[] };
}

export default function Welcome({ produtos, categorias }: IWelcomeProps) {
    const containersRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const { data: productsData } = produtos;
    const { data: categoriesData } = categorias;

    const productsWithDiscount = productsData.filter(
        (produto) => produto.desconto > 0
    );

    const groupByCategory = (productsWithDiscount: IProduct[]) => {
        const grouped: { [key: number]: IProduct[] } = {};

        for (const product of productsWithDiscount) {
            const category = product.categoria_id;

            if (!grouped[category]) {
                grouped[category] = [];
            }

            grouped[category].push(product);
        }

        return grouped;
    };

    const groupedProducts = groupByCategory(productsWithDiscount);

    function handleScroll(direction: "left" | "right", category: string) {
        const container = containersRef.current[category];
        console.log(`Category: ${category}, Container:`, container);
        if (container) {
            const scrollAmount = direction === "right" ? 300 : -300;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            console.log(
                `Scroll direction: ${direction}, Amount: ${scrollAmount}`
            );
        } else {
            console.log(`Container for category ${category} not found.`);
        }
    }

    function scrollToCategory(category: number) {
        const container = containersRef.current[category];
        if (container) {
            container.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <BaseLayout>
            <Head title="Welcome" />
            <nav className="bg-[#34c9ff] text-[#333] fixed z-100 w-full top-20 flex gap-3 items-center justify-center h-14 z-50 shadow-md">
                {categoriesData
                    .filter((categoria) => groupedProducts[categoria.id])
                    .map((categoria) => (
                        <div
                            key={categoria.id}
                            className="relative p-2.5 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        >
                            <button
                                onClick={() => scrollToCategory(categoria.id)}
                                className="text-lg font-semibold text-gray-800 dark:text-gray-200"
                            >
                                {categoria.nome}
                            </button>
                        </div>
                    ))}
            </nav>
            <Carousel />
            <div className="mt-28">
                <div className="flex flex-col gap-6 overflow-x-auto w-full">
                    {Object.entries(groupByCategory(productsWithDiscount)).map(
                        ([category, products]) => (
                            <div
                                key={category}
                                id={category}
                                ref={(el) =>
                                    (containersRef.current[category] = el)
                                }
                                className="scroll-mt-32"
                            >
                                <div className="bg-primary p-3">
                                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 lowercase">
                                        {categoriesData?.find(
                                            (cat) => cat.id === Number(category)
                                        )?.nome ?? "Categoria Desconhecida"}
                                    </h1>
                                </div>
                                <div className="flex overflow-x-hidden relative items-center">
                                    {products.length > 4 && (
                                        <button
                                            onClick={() =>
                                                handleScroll("left", category)
                                            }
                                            className="absolute left-0 z-50 bg-gray-200 dark:bg-black p-2 rounded-full ml-2"
                                        >
                                            <NavigateBefore />
                                        </button>
                                    )}
                                    <div className="flex gap-10 scroll-smooth py-6 px-14 overflow-x-hidden relative items-center">
                                        {products.map((produto) => (
                                            <ProductCard
                                                key={produto.id}
                                                produto={produto}
                                            />
                                        ))}
                                    </div>
                                    {products.length > 4 && (
                                        <button
                                            onClick={() =>
                                                handleScroll("right", category)
                                            }
                                            className="absolute right-0 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-full mr-2"
                                        >
                                            <NavigateNext />
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="p-6 bg-cyan-700 mt-2">
                <h3 className="font-bold">Aproveite nossas ofertas!</h3>
                <span className="">
                    Compre agora e ganhe 10% de desconto em sua primeira compra
                </span>
            </div>
        </BaseLayout>
    );
}
