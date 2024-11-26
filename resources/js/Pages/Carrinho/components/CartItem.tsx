import { formatPrice } from "@/utils";
import { Add, Delete } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";

export function CartItem({
    item,
    onRemove,
    onQuantityUpdate,
}: {
    item: any;
    onRemove: () => void;
    onQuantityUpdate: (produtoId: number, quantidade: number) => void;
}) {
    const aumentarQuantidade = () => {
        onQuantityUpdate(item.produto_id, item.quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (item.quantidade > 1) {
            onQuantityUpdate(item.produto_id, item.quantidade - 1);
        } else {
            onRemove();
        }
    };

    return (
        <div className="py-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center w-96">
                    <img
                        className="w-20 h-20 object-cover rounded-lg"
                        src={"https://via.placeholder.com/150"}
                        alt="Produto"
                    />
                    <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-ellipsis">
                            {item.produto.nome}
                        </p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Unidade:{" "}
                            {formatPrice(item.produto.preco.toString())}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm dark:text-gray-200">
                        Quantidade:
                    </span>
                    <div className="flex items-center shadow-inner bg-cream dark:bg-gray-700 dark:shadow-gray-900/50 rounded px-2 py-1">
                        <button
                            className="text-primary-dark dark:text-gray-200 focus:outline-none hover:opacity-75"
                            onClick={diminuirQuantidade}
                        >
                            <RemoveIcon />
                        </button>
                        <span className="text-darkSurface dark:text-gray-200 mx-2">
                            {item.quantidade}
                        </span>
                        <button
                            className="text-primary-dark dark:text-gray-200 focus:outline-none hover:opacity-75"
                            onClick={aumentarQuantidade}
                        >
                            <Add />
                        </button>
                    </div>
                </div>

                <div>
                    <button className="text-red-500 focus:outline-none">
                        <Delete onClick={onRemove} />
                    </button>
                </div>
            </div>
        </div>
    );
}
