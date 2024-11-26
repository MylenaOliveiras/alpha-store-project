import BaseLayout from "@/Layouts/BaseLayout";
import React from "react";

const Institucional: React.FC = () => {
    return (
        <BaseLayout>
            <div className="p-6 bg-primary text-white">
                <h1 className="text-3xl font-extrabold mb-4">Institucional</h1>
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 dark:text-primary-dark">
                    Sobre
                </h2>
                <p className="mb-4 dark:text-cream">
                    Bem-vindo à ALPHA, sua loja de hardware especializada em
                    tecnologia de ponta. Desde nossa fundação, temos o
                    compromisso de oferecer uma ampla variedade de componentes
                    de alta qualidade para computadores, periféricos e
                    acessórios, atendendo tanto a entusiastas quanto a
                    profissionais do setor. Nosso objetivo é ser o seu parceiro
                    de confiança em todas as etapas da sua jornada tecnológica.
                    Se você está montando um PC Gamer, atualizando seu setup
                    profissional ou buscando soluções para melhorar o desempenho
                    dos seus sistemas, estamos aqui para ajudar. Nossa equipe de
                    especialistas é apaixonada por tecnologia e está sempre
                    pronta para oferecer orientações técnicas e recomendações
                    especializadas.
                </p>
                <p className="mb-4 dark:text-cream">
                    Na ALPHA, acreditamos que a tecnologia é a chave para um
                    futuro melhor. Por isso, nos dedicamos a trazer as últimas
                    novidades do mercado, com produtos inovadores que entregam
                    desempenho e confiabilidade. Além disso, nosso compromisso
                    com o atendimento ao cliente é inigualável. Valorizamos cada
                    interação e trabalhamos para garantir a melhor qualidade
                    para o nosso cliente.
                </p>

                <h2 className="text-2xl font-bold mb-2 dark:text-primary-dark">
                    Localização
                </h2>
                <span className="font-semibold text-primary-dark">
                    Endereço completo
                </span>
                <p className="mb-4 dark:text-cream">
                    A ALPHA está localizada na Rua Exemplo, 123, Bairro Central,
                    Cidade, CEP, uma área estratégica e de fácil acesso em São
                    Paulo.
                </p>
                <span className="font-semibold text-primary-dark">
                    Pontos de referência
                </span>
                <p className="mb-4 dark:text-cream">
                    Estamos próximos ao shopping/local conhecido, há poucos
                    metros da avenida principal/estação de metrô ou ponto de
                    ônibus, facilitando sua chegada tanto de carro quanto por
                    transporte público.
                </p>
                <span className="font-semibold text-primary-dark">
                    Acesso estacionamento
                </span>
                <p className="mb-4 dark:text-cream">
                    Para sua conveniência, oferecemos estacionamento gratuito em
                    frente à loja, com vagas reservadas para clientes. Nossa
                    localização também é acessível para pessoas com deficiência,
                    com rampas e acesso facilitado. Se preferir usar transporte
                    público, estamos a poucos metros da estação nome da estação
                    e de várias linhas de ônibus.
                </p>
                <span className="font-semibold text-primary-dark">
                    Horário de funcionamento
                </span>
                <p className="mb-4 dark:text-cream">
                    Estamos abertos de segunda a sexta das 9h às 18h e aos
                    sábados das 9h às 14h. Durante os feriados, consulte nosso
                    site para horários especiais. Para maior conveniência, nossa
                    loja online está disponível 24/7.
                </p>
                <span className="font-semibold text-primary-dark">
                    Ambiente e atendimento
                </span>
                <p className="mb-4 dark:text-cream">
                    Ao visitar a ALPHA, você encontrará um ambiente moderno e
                    acolhedor, projetado para oferecer uma experiência de compra
                    tranquila e agradável. Nossa equipe de especialistas está
                    sempre disponível para ajudar com qualquer dúvida e garantir
                    que você encontre o hardware ideal para suas necessidades.
                </p>
            </div>
        </BaseLayout>
    );
};

export default Institucional;
