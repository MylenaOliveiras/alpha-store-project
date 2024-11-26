import Logo from "@/assets/onlyFace-logo.svg";
import visa from "@/assets/images/visa.svg";
import mastercard from "@/assets/images/mastercard.svg";
import boleto from "@/assets/images/boleto.svg";
import pix from "@/assets/images/pix.svg";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";

export const categories = [
    { link: "167", nome: "Periféricos" },
    { link: "168", nome: "Computadores" },
    { link: "169", nome: "Hardware" },
    { link: "170", nome: "Monitores" },
    { link: "171", nome: "Notebooks" },
    { link: "172", nome: "Rede e Wireless" },
];

const footerItens = [
    {
        title: "Produtos",
        items: categories,
    },
    {
        title: "Dúvidas",
        items: [
            { nome: "Entrega", link: "/duvidas" },
            { nome: "Garantia", link: "/duvidas" },
            { nome: "Como Comprar", link: "/duvidas" },
            { nome: "Formas de Pagamento", link: "/duvidas" },
        ],
    },
    {
        title: "Institucional",
        items: [
            { nome: "Sobre", link: "/institucional" },
            { nome: "Localização", link: "/institucional" },
        ],
    },
    {
        title: "Ajuda",
        items: [
            { nome: "SAC", link: "/sac" },
            { nome: "Política de Privacidade", link: "/politicaPrivacidade" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText w-full flex justify-between items-center px-24 py-3 shadow-inner dark:shadow-gray-950">
            <ApplicationLogo className="w-72 h-auto" />
            <div className="flex gap-14">
                {footerItens.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <h1 className="font-bold">{item.title}</h1>
                        {item.items.map((subItem, subIndex) => (
                            <Link
                                key={subIndex}
                                href={
                                    item.title === "Produtos"
                                        ? `produtos/categoria/${subItem.link}`
                                        : subItem.link
                                }
                                className="text-sm"
                            >
                                {typeof subItem === "string"
                                    ? subItem
                                    : subItem.nome}
                            </Link>
                        ))}
                        {item.title === "Ajuda" && (
                            <div className="mt-4">
                                <span className="font-bold">Pagamento</span>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <img src={visa} className="w-20" />
                                    <img src={mastercard} className="w-20" />
                                    <img src={boleto} className="w-20" />
                                    <img src={pix} className="w-20" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
}
