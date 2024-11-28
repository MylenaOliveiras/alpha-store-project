import visa from "@/assets/images/visa.svg";
import mastercard from "@/assets/images/mastercard.svg";
import boleto from "@/assets/images/boleto.svg";
import pix from "@/assets/images/pix.svg";

interface PaymentMethodProps {
    setPagamento: (pagamento: string) => void;
    pagamento: string;
}

export function PaymentMethod({ setPagamento, pagamento }: PaymentMethodProps) {
    return (
        <form>
            <div className="border border-gray-200 p-4 rounded-md mb-4 shadow-lg dark:shadow-gray-900">
                <label
                    htmlFor="credit-card"
                    className="flex items-center text-darkSurface dark:text-cream"
                >
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="Cartão de Crédito"
                        checked={pagamento === "Cartão de Crédito"}
                        onChange={(e) => setPagamento(e.target.value)}
                    />
                    <img
                        className="mx-3 w-16"
                        src={visa}
                        alt="Cartão de Crédito"
                    />
                    Cartão de Crédito
                </label>
            </div>
            <div className="border border-gray-200 p-4 rounded-md mb-4 shadow-lg dark:shadow-gray-900">
                <label
                    htmlFor="debit-card"
                    className="flex items-center text-darkSurface dark:text-cream"
                >
                    <input
                        type="radio"
                        id="debit-card"
                        name="payment-method"
                        value="Cartão de Débito"
                        checked={pagamento === "Cartão de Débito"}
                        onChange={(e) => setPagamento(e.target.value)}
                    />
                    <img
                        className="w-16 mx-3"
                        src={mastercard}
                        alt="Cartão de Débito"
                    />
                    Cartão de Débito
                </label>
            </div>
            <div className="border border-gray-200 p-4 rounded-md mb-4 shadow-lg dark:shadow-gray-900">
                <label
                    htmlFor="bank-slip"
                    className="flex items-center text-darkSurface dark:text-cream"
                >
                    <input
                        type="radio"
                        id="bank-slip"
                        name="payment-method"
                        value="Boleto Bancário"
                        checked={pagamento === "Boleto Bancário"}
                        onChange={(e) => setPagamento(e.target.value)}
                    />
                    <img
                        className="mx-3 w-16"
                        src={boleto}
                        alt="Boleto Bancário"
                    />
                    Boleto Bancário
                </label>
            </div>
            <div className="border border-gray-200 p-4 rounded-md mb-4 shadow-lg dark:shadow-gray-900">
                <label
                    htmlFor="pix"
                    className="flex items-center text-darkSurface dark:text-cream"
                >
                    <input
                        type="radio"
                        id="pix"
                        name="payment-method"
                        value="Pix"
                        checked={pagamento === "Pix"}
                        onChange={(e) => setPagamento(e.target.value)}
                    />
                    <img className="mx-3 w-16" src={pix} alt="Pix" />
                    Pix
                </label>
            </div>
        </form>
    );
}
