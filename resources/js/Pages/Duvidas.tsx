import React from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import Collapse from "@/Components/Collapse";

const Duvidas: React.FC = () => {
    return (
        <BaseLayout>
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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt cursus vehicula. Maecenas sodales sit amet tortor nec scelerisque. Sed scelerisque nisi id sapien volutpat dignissim. Suspendisse at ex vestibulum, fringilla tellus venenatis, tempus eros. Sed fringilla metus erat, et aliquam purus semper sodales. Donec pharetra ex non tellus feugiat, vel interdum lectus varius. Curabitur non purus aliquet, sagittis massa id, mollis metus. Quisque ac lacinia risus."
                />
                <Collapse
                    title="5. COMO POSSO ENTRAR EM CONTATO COM O SUPORTE TÉCNICO?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt cursus vehicula. Maecenas sodales sit amet tortor nec scelerisque. Sed scelerisque nisi id sapien volutpat dignissim. Suspendisse at ex vestibulum, fringilla tellus venenatis, tempus eros. Sed fringilla metus erat, et aliquam purus semper sodales. Donec pharetra ex non tellus feugiat, vel interdum lectus varius. Curabitur non purus aliquet, sagittis massa id, mollis metus. Quisque ac lacinia risus."
                />
                <Collapse
                    title="6. VOCÊS FAZEM MONTAGEM DE COMPUTADORES?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt cursus vehicula. Maecenas sodales sit amet tortor nec scelerisque. Sed scelerisque nisi id sapien volutpat dignissim. Suspendisse at ex vestibulum, fringilla tellus venenatis, tempus eros. Sed fringilla metus erat, et aliquam purus semper sodales. Donec pharetra ex non tellus feugiat, vel interdum lectus varius. Curabitur non purus aliquet, sagittis massa id, mollis metus. Quisque ac lacinia risus."
                />
                <Collapse
                    title="7. POSSO RETIRAR MEU PEDIDO NA LOJA FÍSICA?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt cursus vehicula. Maecenas sodales sit amet tortor nec scelerisque. Sed scelerisque nisi id sapien volutpat dignissim. Suspendisse at ex vestibulum, fringilla tellus venenatis, tempus eros. Sed fringilla metus erat, et aliquam purus semper sodales. Donec pharetra ex non tellus feugiat, vel interdum lectus varius. Curabitur non purus aliquet, sagittis massa id, mollis metus. Quisque ac lacinia risus."
                />
                <Collapse
                    title="8. ONDE ENCONTRO MAIS INFORMAÇÕES SOBRE UM PRODUTO ESPECÍFICO?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt cursus vehicula. Maecenas sodales sit amet tortor nec scelerisque. Sed scelerisque nisi id sapien volutpat dignissim. Suspendisse at ex vestibulum, fringilla tellus venenatis, tempus eros. Sed fringilla metus erat, et aliquam purus semper sodales. Donec pharetra ex non tellus feugiat, vel interdum lectus varius. Curabitur non purus aliquet, sagittis massa id, mollis metus. Quisque ac lacinia risus.
"
                />
            </section>
        </BaseLayout>
    );
};

export default Duvidas;
