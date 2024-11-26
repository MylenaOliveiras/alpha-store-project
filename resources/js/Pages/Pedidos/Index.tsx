import { Link } from "@inertiajs/react";

const Pedidos = ({ pedidos }) => {
    const formatDate = (date: string) => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    console.log(pedidos);
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Lista de Pedidos
            </h1>

            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Data
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-900 dark:text-gray-100">
                    {pedidos.map((pedido) => (
                        <tr
                            key={pedido.id}
                            className="border-b border-gray-200 dark:border-gray-600"
                        >
                            <td className="px-6 py-4">{pedido.id}</td>
                            <td className="px-6 py-4">
                                {formatDate(pedido.PEDIDO_DATA)}
                            </td>
                            <td className="px-6 py-4">
                                {pedido.status.STATUS_DESC}
                            </td>
                            <td className="px-6 py-4">
                                <Link
                                    href={`/pedidos/${pedido.PEDIDO_ID}`}
                                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300"
                                >
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pedidos;
