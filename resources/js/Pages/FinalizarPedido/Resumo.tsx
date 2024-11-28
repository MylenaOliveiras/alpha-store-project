import type { ICart } from "@/types/global-types";
import { formatPrice } from "@/utils";
import { useEffect, useState } from "react";

interface ResumoPedidoProps {
    carrinho?: { data: ICart[] };
}

export function ResumoPedido({ carrinho }: ResumoPedidoProps) {
    const [totals, setTotals] = useState({
        subtotal: 0,
        frete: 15.0,
        descontos: 0,
        total: 0,
    });

    useEffect(() => {
        if (carrinho) {
            const subtotal = carrinho.data.reduce(
                (sum, item) =>
                    sum + parseFloat(item.produto.preco) * item.quantidade,
                0
            );

            const descontos = carrinho.data.reduce(
                (sum, item) =>
                    sum + parseFloat(item.produto.desconto) * item.quantidade,
                0
            );

            const total = subtotal + totals.frete - descontos;

            setTotals({ subtotal, frete: totals.frete, descontos, total });
        }
    }, [carrinho]);

    if (!carrinho) {
        return null;
    }

    return (
        <div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-cream">
                <span>Subtotal</span>
                <span>{formatPrice(totals.subtotal.toString())}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-cream">
                <span>Frete</span>
                <span>{formatPrice(totals.frete.toString())}</span>
            </div>
            <div className="flex justify-between text-sm text-red-500">
                <span>Descontos</span>
                <span>- {formatPrice(totals.descontos.toString())}</span>
            </div>
            <div className="py-6">
                <div className="flex justify-between items-center font-bold text-lg text-gray-700 dark:text-cream">
                    <span>Total</span>
                    <span>{formatPrice(totals.total.toString())}</span>
                </div>
            </div>
        </div>
    );
}
