import { Link } from "@inertiajs/react";
import { ListAlt, Logout, Map, Person, Security } from "@mui/icons-material";

interface IDashboardMenuProperties {
    step: number;
    setStep: (step: number) => void;
}

export function DashboardMenu({ setStep, step }: IDashboardMenuProperties) {
    return (
        <div className="divide-y-2 w-96 h-[292px] mx-10 my-10 border-2 rounded-md">
            <div
                className={`p-4  hover:bg-primary/20 dark:hover:bg-gray-800 text-darkSurface dark:text-cream
                            ${step === 1 && "bg-primary/15"}
                            `}
            >
                <button
                    onClick={() => {
                        setStep(1);
                    }}
                    className="flex gap-2"
                >
                    <Person />
                    Perfil
                </button>
            </div>
            <div
                className={`p-4  hover:bg-primary/20 dark:hover:bg-gray-800 text-darkSurface dark:text-cream
                            ${step === 2 && "bg-primary/15"}
                            `}
            >
                <button
                    onClick={() => {
                        setStep(2);
                    }}
                    className="flex gap-2"
                >
                    <Security />
                    Privacidade e segurança
                </button>
            </div>
            <div
                className={`p-4  hover:bg-primary/20 dark:hover:bg-gray-800 text-darkSurface dark:text-cream
                            ${step === 3 && "bg-primary/15"}
                            `}
            >
                <button
                    onClick={() => {
                        setStep(3);
                    }}
                    className="flex gap-2"
                >
                    <Map />
                    Endereços
                </button>
            </div>
            <div
                className={`p-4  hover:bg-primary/20 dark:hover:bg-gray-800 text-darkSurface dark:text-cream
                            ${step === 4 && "bg-primary/15"}
                            `}
            >
                <button
                    onClick={() => {
                        setStep(4);
                    }}
                    className="flex gap-2"
                >
                    <ListAlt />
                    Pedidos
                </button>
            </div>
            <div className="p-4  hover:bg-primary/20 dark:hover:bg-gray-800 text-darkSurface dark:text-cream">
                <Link
                    href={route("logout")}
                    method="post"
                    className="flex gap-2"
                >
                    <Logout />
                    Sair
                </Link>
            </div>
        </div>
    );
}
