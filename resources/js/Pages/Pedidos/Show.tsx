import React, { useState, useEffect } from "react";

const PedidoDetalhes = ({ pedido }) => {
    if (!pedido) return <div>Pedido não encontrado</div>;

    console.log(pedido);
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Detalhes do Pedido
            </h1>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Pedido ID: {pedido.id}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Data: {pedido.data}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Status: {pedido.status}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Itens do Pedido
                    </h3>
                    <ul className="list-disc pl-6">
                        {pedido.itens.map((item) => (
                            <li
                                key={item.id}
                                className="text-gray-700 dark:text-gray-300"
                            >
                                {item.produto.PRODUTO_NOME} - {item.ITEM_QTD}x
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Ações
                    </h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Atualizar Status
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PedidoDetalhes;
