import type { IAddress } from "@/types/global-types";
import { Link } from "@inertiajs/react";

type IPedidoSchema = {
    data: string;
    endereco: IAddress | undefined;
    id: number;
    status: {
        id: number;
        descricao: string;
    };
};

interface IPedido {
    pedido: IPedidoSchema;
}

export const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
};

export default function Pedido({ pedido }: IPedido) {
    return (
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        Pedido Nº {pedido.id}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Realizado em {formatDate(pedido.data)}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Status:
                    </span>
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            pedido.status.id === 1
                                ? "bg-blue-100 text-blue-700"
                                : pedido.status.id === 2
                                ? "bg-yellow-100 text-yellow-700"
                                : pedido.status.id === 3
                                ? "bg-green-100 text-green-700"
                                : pedido.status.id === 4
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        {pedido.status.descricao}
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Enviar para:
                    </span>
                    <span className="text-gray-800 dark:text-gray-300">
                        {pedido.endereco?.logradouro}, {pedido.endereco?.numero}{" "}
                        - {pedido.endereco?.cidade} - {pedido.endereco?.estado}
                    </span>
                </div>

                <Link
                    href={`/pedidos/${pedido.id}`}
                    className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none transition"
                >
                    Visualizar detalhes do pedido
                </Link>
            </div>
        </section>
    );
}
