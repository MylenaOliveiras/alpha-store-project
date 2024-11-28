import BaseLayout from "@/Layouts/BaseLayout";
import React from "react";
import { Group, LockClock, Map, Phone } from "@mui/icons-material";

const Institucional: React.FC = () => {
    return (
        <BaseLayout>
            <div className="bg-primary text-white p-10 text-center rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-4">Institucional</h1>
                <p className="text-lg">
                    Conheça a nossa história, missão e como podemos ajudar você!
                </p>
            </div>

            <div className="p-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-primary-dark">
                        Sobre a ALPHA
                    </h2>
                    <p className="text-lg mb-4 text-gray-700 dark:text-cream">
                        Bem-vindo à ALPHA, sua loja de hardware especializada em
                        tecnologia de ponta. Desde nossa fundação, temos o
                        compromisso de oferecer uma ampla variedade de
                        componentes de alta qualidade para computadores,
                        periféricos e acessórios, atendendo tanto a entusiastas
                        quanto a profissionais do setor.
                    </p>
                    <p className="text-lg mb-4 text-gray-700 dark:text-cream">
                        Nosso objetivo é ser o seu parceiro de confiança em
                        todas as etapas da sua jornada tecnológica. Se você está
                        montando um PC Gamer, atualizando seu setup profissional
                        ou buscando soluções para melhorar o desempenho dos seus
                        sistemas, estamos aqui para ajudar.
                    </p>
                    <p className="text-lg mb-4 text-gray-700 dark:text-cream">
                        A equipe da ALPHA é formada por especialistas
                        apaixonados por tecnologia e sempre disposta a oferecer
                        orientações técnicas e recomendações especializadas.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-primary-dark">
                        Onde nos encontrar
                    </h2>
                    <div className="flex items-center mb-4">
                        <Map className="text-primary-dark text-2xl mr-4" />
                        <div>
                            <h3 className="font-semibold text-lg text-primary-dark">
                                Endereço completo
                            </h3>
                            <p className="text-gray-700 dark:text-cream">
                                Rua Exemplo, 123, Bairro Central, Cidade, CEP.
                                Localização estratégica e de fácil acesso em São
                                Paulo.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <Group className="text-primary-dark text-2xl mr-4" />
                        <div>
                            <h3 className="font-semibold text-lg text-primary-dark">
                                Pontos de referência
                            </h3>
                            <p className="text-gray-700 dark:text-cream">
                                Estamos próximos ao shopping/local conhecido, há
                                poucos metros da avenida principal/estação de
                                metrô ou ponto de ônibus.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <Phone className="text-primary-dark text-2xl mr-4" />
                        <div>
                            <h3 className="font-semibold text-lg text-primary-dark">
                                Acesso estacionamento
                            </h3>
                            <p className="text-gray-700 dark:text-cream">
                                Para sua conveniência, oferecemos estacionamento
                                gratuito em frente à loja, com vagas reservadas
                                para clientes. Nossa localização também é
                                acessível para pessoas com deficiência.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <LockClock className="text-primary-dark text-2xl mr-4" />
                        <div>
                            <h3 className="font-semibold text-lg text-primary-dark">
                                Horário de funcionamento
                            </h3>
                            <p className="text-gray-700 dark:text-cream">
                                Segunda a sexta: 9h às 18h | Sábados: 9h às 14h.
                                Consultar feriados para horários especiais.
                                Nossa loja online está disponível 24/7.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-primary-dark">
                        Ambiente e Atendimento
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-cream">
                        Ao visitar a ALPHA, você encontrará um ambiente moderno
                        e acolhedor, projetado para oferecer uma experiência de
                        compra tranquila e agradável. Nossa equipe de
                        especialistas está sempre disponível para ajudar com
                        qualquer dúvida e garantir que você encontre o hardware
                        ideal para suas necessidades.
                    </p>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Institucional;
