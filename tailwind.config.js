import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#34C9FF",
                    dark: "#009ACD", // Azul Escuro
                    light: "#66D9FF", // Azul Claro
                },
                black: "#1E1E1E", // Preto
                cream: "#F5F5F5", // Branco/Creme
                darkBackground: "#121212", // Fundo para o dark mode
                darkSurface: "#1E1E1E", // Superfícies para o dark mode
                darkText: "#E0E0E0", // Texto no dark mode
                lightBackground: "#F5F5F5", // Fundo para o light mode
                lightSurface: "#FFFFFF", // Superfícies para o light mode
                lightText: "#1E1E1E", // Texto no light mode
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                "primary-light": "#34C9FF",
                "dark-mode": "#121212",
                "light-mode": "#F5F5F5",
            }),
            textColor: (theme) => ({
                ...theme("colors"),
                "primary-light": "#34C9FF",
                "dark-mode": "#E0E0E0",
                "light-mode": "#1E1E1E",
            }),
            borderColor: (theme) => ({
                ...theme("colors"),
                "primary-light": "#34C9FF",
                "dark-mode": "#1E1E1E",
                "light-mode": "#F5F5F5",
            }),
        },
    },
    plugins: [forms],
};
