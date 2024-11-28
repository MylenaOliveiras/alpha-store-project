import Logo from "@/assets/logo.svg";
import { Link, useForm } from "@inertiajs/react";
import TextInput from "./TextInput";
import SearchIcon from "@mui/icons-material/Search";
import {
    AccountCircle,
    HelpOutline,
    ShoppingCart,
    Dashboard,
} from "@mui/icons-material";
import Switch from "./SwitchButton";
import type { FormEventHandler } from "react";

interface IHeaderProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    userName?: string | null;
    cartItems: number;
}

export function Header({
    userName,
    setDarkMode,
    darkMode,
    cartItems,
}: IHeaderProps) {
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (!data.search.trim()) {
            console.error("Campo de busca está vazio");
            return;
        }

        get(route("produtos.search", { search: data.search }), {
            onSuccess: () => {
                console.log("Busca realizada com sucesso!");
                reset();
            },
            onError: (errors: any) => {
                console.error("Erro ao realizar busca:", errors);
            },
        });
    };

    return (
        <header className="flex text-center fixed w-full top-0 justify-between items-center max-h-16 px-10 bg-lightBackground dark:bg-darkBackground py-10 shadow-md z-50 dark:shadow-gray-950">
            <Link href="/">
                <img src={Logo} alt="logo" className="h-16" />
            </Link>
            <div className="flex max-h-14 items-center divide-x-2 divide-gray-300">
                <form onSubmit={submit}>
                    <div className="flex items-center px-3 h-10">
                        <TextInput
                            name="search-product"
                            className="rounded-e-none bg-slate-400/15"
                            value={data.search}
                            onChange={(e) => setData("search", e.target.value)}
                            placeholder="Buscar produtos"
                        />
                        <button
                            type="submit"
                            className="content-center px-2 rounded-e-md py-[8.5px] dark:bg-gray-300 bg-primary"
                        >
                            <SearchIcon className="dark:text-darkSurface text-lightSurface" />
                        </button>
                    </div>
                </form>
                <div className="flex gap-2 items-center px-3 h-10">
                    <Link href={route("dashboard")}>
                        <AccountCircle
                            fontSize="large"
                            className="
                        text-primary dark:text-gray-300
                    "
                        />
                    </Link>
                    <div className="dark:text-lightBackground ">
                        {userName ? (
                            <span>Olá, {userName}</span>
                        ) : (
                            <div className="flex flex-col items-start">
                                <Link href={route("login")}>
                                    <span>Login ou</span>
                                </Link>
                                <Link href={route("register")}>
                                    <span>Cadastre-se</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="px-3 h-10 flex">
                    <Switch
                        isDarkMode={darkMode}
                        onChange={(event) => {
                            return setDarkMode(event.target.checked);
                        }}
                    />
                </div>
                <div className="flex gap-2 px-3 h-10 items-center">
                    <Link href={route("sac")}>
                        <HelpOutline
                            fontSize="medium"
                            className="text-primary dark:text-gray-200"
                        />
                    </Link>
                    <Link href={route("produtos.index")}>
                        <Dashboard
                            fontSize="medium"
                            className="text-primary dark:text-gray-200"
                        />
                    </Link>
                    <Link href={route("carrinho.index")}>
                        <div className="relative">
                            <ShoppingCart
                                fontSize="medium"
                                className="text-primary dark:text-gray-200"
                            />
                            {cartItems > 0 && (
                                <span className="absolute -top-1 -right-1 dark:bg-primary dark:text-black  bg-darkSurface text-cream rounded-full px-1 text-xs leading-none">
                                    {cartItems}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
