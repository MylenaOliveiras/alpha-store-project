import Logo from "@/assets/onlyFace-logo.svg";
import visa from "@/assets/images/visa.svg";
import mastercard from "@/assets/images/mastercard.svg";
import boleto from "@/assets/images/boleto.svg";
import pix from "@/assets/images/pix.svg";
import ApplicationLogo from "./ApplicationLogo";

const footerItens = [
    {
        title: "Produtos",
        items: [
            "Periféricos",
            "Computadores",
            "Hardware",
            "Monitores",
            "Notebooks",
            "Rede e Wireless",
        ],
    },
    {
        title: "Dúvidas",
        items: ["Entrega", "Garantia", "Como Comprar", "Formas de Pagamento"],
    },
    {
        title: "Institucional",
        items: ["Sobre", "Localização"],
    },
    {
        title: "Ajuda",
        items: ["SAC", "Política de Privacidade"],
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
                            <a key={subIndex} href="#" className="text-sm">
                                {subItem}
                            </a>
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
