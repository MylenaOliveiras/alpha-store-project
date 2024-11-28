import {
    Assignment,
    CheckCircle,
    CreditCard,
    LocalShipping,
} from "@mui/icons-material";

interface IStepsProps {
    etapa: number;
    concluido: boolean;
}

export function Steps({ concluido, etapa }: IStepsProps) {
    return (
        <div className="relative mb-8 mx-32">
            <div className="absolute top-5 w-full h-1 bg-gray-200">
                <div
                    className="h-full bg-primary-light transition-all duration-500"
                    style={{ width: `${((etapa - 1) / 2) * 100}%` }}
                />
            </div>
            <div className="relative flex justify-between">
                <div className="flex flex-col items-center">
                    <div
                        className={`w-14 h-12 rounded-full flex items-center justify-center ${
                            etapa >= 1
                                ? "bg-primary-light text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        <LocalShipping className="w-6 h-6" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-darkSurface dark:text-cream">
                        Entrega
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        className={`w-14 h-12 rounded-full flex items-center justify-center ${
                            etapa >= 2
                                ? "bg-primary-light text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-darkSurface dark:text-cream">
                        Pagamento
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        className={`w-14 h-12 rounded-full flex items-center justify-center ${
                            etapa === 3
                                ? "bg-primary-light text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {concluido ? (
                            <CheckCircle className="w-6 h-6" />
                        ) : (
                            <Assignment className="w-6 h-6" />
                        )}
                    </div>
                    <span className="mt-2 text-sm font-medium">Resumo</span>
                </div>
            </div>
        </div>
    );
}
