import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import React from "react";

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { props } = usePage();
    const { auth, cartItemsCount } = props;

    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    const userName = auth.user ? auth.user.USUARIO_NOME : null;
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <>
            <Header
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                userName={userName}
                cartItems={Number(cartItemsCount) || 0}
            />
            <div className="mt-20 bg-lightSurface dark:bg-darkBackground">
                {children}
            </div>
            <Footer />
        </>
    );
}
