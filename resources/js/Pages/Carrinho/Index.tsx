import { usePage } from "@inertiajs/react";
import React from "react";

export default function Carrinho({ carrinho }) {
    console.log(carrinho);
    return (
        <div>
            <ul>
                {carrinho.data.map((item: any) => (
                    <li key={item.produto_id}>
                        Produto: {item.produto.nome} - Quantidade:{" "}
                        {item.quantidade}
                    </li>
                ))}
            </ul>
        </div>
    );
}
