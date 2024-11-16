import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/assets/logo.svg";
import { Link } from "@inertiajs/react";
import TextInput from "./TextInput";
import SearchIcon from "@mui/icons-material/Search";
import {
    AccountCircle,
    FavoriteRounded,
    HelpOutline,
    ShoppingCart,
} from "@mui/icons-material";
import Switch from "./SwitchButton";

interface IHeaderProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    userName?: string | null;
}

export function Header({ userName, setDarkMode, darkMode }: IHeaderProps) {
    return (
        <header className="flex text-center fixed w-full top-0 justify-between items-center max-h-16 px-10 bg-lightBackground dark:bg-darkBackground py-10 shadow-md z-50 dark:shadow-gray-950">
            <Link href="/">
                <img src={Logo} alt="logo" className="h-16" />
            </Link>
            <div className="flex max-h-14 items-center divide-x-2 divide-gray-300">
                <div className="flex items-center px-3 h-10">
                    <TextInput
                        name="search-product"
                        className="rounded-e-none bg-slate-400/15"
                    />
                    <div className="content-center px-2 rounded-e-md py-[8.5px] dark:bg-gray-300 bg-primary">
                        <SearchIcon className="dark:text-darkSurface text-lightSurface" />
                    </div>
                </div>
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
                    <Link href={route("dashboard")}>
                        <HelpOutline
                            fontSize="medium"
                            className="text-primary dark:text-gray-200"
                        />
                    </Link>
                    <Link href={route("dashboard")}>
                        <FavoriteRounded
                            fontSize="medium"
                            className="text-primary dark:text-gray-200"
                        />
                    </Link>
                    <Link href={route("dashboard")}>
                        <ShoppingCart
                            fontSize="medium"
                            className="text-primary dark:text-gray-200"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
