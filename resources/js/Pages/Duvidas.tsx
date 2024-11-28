import React from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import Collapse from "@/Components/Collapse";
import { Head } from "@inertiajs/react";

const Duvidas: React.FC = () => {
    return (
        <BaseLayout>
            <Head title="Dúvidas" />
            <div className="p-6 bg-primary ">
                <h1 className="text-3xl font-extrabold ">Dúvidas</h1>
            </div>
            <section className="p-6">
                <Collapse
                    title="1. COMO FAÇO PARA ACOMPANHAR MEU PEDIDO?"
                    description="Você pode acompanhar o status do seu pedido acessando a sessão “minha conta” no nosso site e clicando em “meus pedidos “. Lá, você encontrará todas as informações sobre o andamento da sua sua compra. Além disso, enviaremos atualizações por e-mail para mantê-lo informado."
                />
                <Collapse
                    title="2. QUAIS SÃO AS FORMAS DE PAGAMENTO ACEITAS?"
                    description="Aceitamos diversos métodos de pagamento, incluindo cartões de crédito (Visa, mastercard, American Express), boleto bancário e transferências via Pix. Todas as transações são realizadas em um ambiente seguro para garantir a proteção dos seus dados."
                />
                <Collapse
                    title="3. COMO FUNCIONA A POLÍTICA DE DEVOLUÇÃO?"
                    description="Você pode devolver qualquer produto em até sete dias corridos após o recebimento, desde que esteja em sua embalagem original e sem sinais de uso. Para inicializar o processo de devolução, entre em contato com nossa central de atendimento ao cliente."
                />
                <Collapse
                    title="4. VOCÊS OFERECEM GARANTIA NOS PRODUTOS?"
                    description="Sim, todos os nossos produtos possuem garantia. O prazo e as condições variam conforme o fabricante. Para mais detalhes sobre a garantia de um item específico, consulte a descricao do produto ou entre em contato com nossa central de atendimento."
                />
                <Collapse
                    title="5. COMO POSSO ENTRAR EM CONTATO COM O SUPORTE TÉCNICO?"
                    description="Você pode entrar em contato com o nosso suporte técnico por meio da central de atendimento em nosso site ou pelo e-mail alpha@suporte.coms. Nossa equipe está pronta para ajudar com qualquer dúvida ou problema relacionado aos nossos produtos."
                />
                <Collapse
                    title="6. VOCÊS FAZEM MONTAGEM DE COMPUTADORES?"
                    description="Sim, oferecemos serviço de montagem de computadores personalizados. Para mais informações e orçamentos, entre em contato com nossa equipe ou visite nossa loja."
                />
                <Collapse
                    title="7. POSSO RETIRAR MEU PEDIDO NA LOJA FÍSICA?"
                    description="Sim, você pode retirar seu pedido diretamente na nossa loja física. Após a confirmação do pagamento, selecionaremos a opção de retirada e você será notificado quando o pedido estiver pronto para ser retirado."
                />
                <Collapse
                    title="8. ONDE ENCONTRO MAIS INFORMAÇÕES SOBRE UM PRODUTO ESPECÍFICO?"
                    description="Você pode encontrar informações detalhadas sobre qualquer produto em nossa loja online. Além disso, nossa equipe de atendimento está disponível para fornecer mais informações ou tirar dúvidas sobre qualquer item que você desejar."
                />
            </section>
        </BaseLayout>
    );
};

export default Duvidas;
