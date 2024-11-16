import { Link } from "@inertiajs/react";
import type { IProduct } from "../Pages/utils";

interface IProductCardProperties {
    produto: IProduct;
}

export function ProductCard({ produto }: IProductCardProperties) {
    function formatPrice(price: string) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(parseFloat(price));
    }

    return (
        <Link href={`/produtos/${produto.id}`}>
            <div className="w-64 h-[360px] flex flex-col p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out gap-4 hover:scale-105 hover:shadow-[rgba(52,201,255,0.4)_-5px_5px,rgba(52,201,255,0.3)_-10px_10px,rgba(52,201,255,0.2)_-15px_15px,rgba(52,201,255,0.1)_-20px_20px,rgba(52,201,255,0.05)_-25px_25px] items-center">
                <img
                    src={produto.imagens[0]}
                    alt={produto.nome}
                    className="w-60 h-40 object-cover rounded-md"
                />
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate w-60 px-6">
                    {produto.nome}
                </h1>
                <span className="text-xl font-bold text-blue-500 dark:text-blue-400">
                    {formatPrice(produto.preco.toString())}
                </span>
                <button className="py-2 px-4 rounded-md bg-blue-500 text-white font-semibold transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 mt-2">
                    Adicionar no carrinho
                </button>
            </div>
        </Link>
    );
}
