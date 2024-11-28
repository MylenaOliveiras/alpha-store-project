import Collapse from "@/Components/Collapse";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";

export default function PoliticaPrivacidade() {
    return (
        <BaseLayout>
            <Head title="Política de Privacidade" />

            <div className="p-6 bg-primary text-white">
                <h1 className="text-3xl font-extrabold mb-4">
                    Política de Privacidade
                </h1>
            </div>
            <div className="p-6">
                <p className="text-darkSurface dark:text-cream text-lg font-semibold">
                    Prezado cliente, a ALPHA compreende a importância de
                    explicar de forma transparente nossos processos de
                    tratamento de dados e de esclarecer seus direitos enquanto
                    titular desses dados. Esta política se aplica a todas as
                    pessoas que interagem com nossos serviços de comércio
                    eletrônico, tanto na plataforma web quanto no aplicativo
                    móvel.
                </p>
                <p className="text-darkSurface dark:text-cream text-lg font-semibold">
                    Vale ressaltar que alguns dados são essenciais para a
                    prestação de nossos serviços. Caso você opte por não
                    fornecê-los, poderá escolher não utilizar nossa plataforma
                    ou aplicativo. Outros dados não são obrigatórios, mas a
                    falta de consentimento para seu fornecimento pode
                    comprometer a qualidade da prestação de nossos serviços,
                    limitando a formatação e funcionalidades de nossa
                    plataforma/aplicativo.
                </p>
                <p className="text-darkSurface dark:text-cream text-lg font-semibold">
                    A ALPHA é a controladora dos dados pessoais tratados em
                    nossa plataforma/aplicativo.
                </p>
                <section className="mt-6 flex flex-col gap-4">
                    <Collapse
                        title="1. COMO COLETAMOS OS SEUS DADOS"
                        description="Coletamos seus dados a partir das seguintes fontes:
                            1.	Plataforma de e-commerce: Ao se cadastrar em nossa plataforma, coletamos dados de identificação pessoal, dados de identificação eletrônica e dados financeiros. A totalidade dos dados coletados e seu uso estão descritos na seção ´Dados que Coletamos´.
                            2.	Aplicativo de e-commerce: Disponível em lojas de terceiros, como Google Play e Apple Store, também coletamos informações de cadastro conforme mencionado no item anterior.
                            3.	Canais de atendimento: Podemos coletar dados por meio dos canais de atendimento.
                            4.	Plataformas de terceiros: Através de plataformas como Facebook, Google, entre outras. Essas plataformas possuem suas próprias políticas de privacidade, e os dados que coletamos são aqueles cadastrados e autorizados nessas plataformas, posteriormente compartilhados com a ALPHA. Dentro de nossa empresa, esses dados são tratados da mesma forma que os dados coletados diretamente por nós. Recomendamos que leia as políticas de privacidade das plataformas de terceiros para entender como seus dados são tratados por elas."
                    />
                    <Collapse
                        title="2. DADOS QUE COLETAMOS"
                        description="Coletamos dados pessoais necessários para fornecer nossos serviços, como informações de cadastro, dados financeiros e dados de navegação. As informações coletadas são usadas para personalizar sua experiência e garantir a funcionalidade dos nossos serviços. Para mais detalhes, consulte nossa seção ´Como Coletamos Seus Dados´."
                    />
                    <Collapse
                        title="3. DECISÕES AUTOMATIZADAS"
                        description="Utilizamos processos automatizados para otimizar nossa operação, como a análise de crédito e recomendação de produtos. No entanto, essas decisões são baseadas em critérios objetivos e não envolvem discriminação ou prejuízo para o titular dos dados."
                    />
                    <Collapse
                        title="4. COMPARTILHAMENTO DE DADOS"
                        description="Seus dados pessoais podem ser compartilhados com parceiros de confiança para a execução dos nossos serviços, como fornecedores de pagamento e transporte. Apenas os dados necessários para o cumprimento de nossa parceria serão compartilhados, respeitando sempre a sua privacidade."
                    />
                    <Collapse
                        title="5. MEDIDAS DE SEGURANÇA"
                        description="Adotamos medidas de segurança para proteger seus dados pessoais contra acessos não autorizados, vazamentos ou qualquer forma de uso indevido. Utilizamos tecnologias de criptografia e monitoramento constante para garantir a integridade e a confidencialidade das informações."
                    />
                    <Collapse
                        title="6. SOBRE ELIMINAÇÃO DE DADOS PESSOAIS"
                        description="Você pode solicitar a eliminação dos seus dados pessoais a qualquer momento, conforme previsto pela legislação vigente. Após a solicitação, tomaremos as medidas necessárias para remover ou anonimizar seus dados, salvo quando houver obrigação legal de mantê-los."
                    />
                    <Collapse
                        title="7. SEUS DIREITOS"
                        description="Como titular dos dados, você tem o direito de acessar, corrigir, excluir ou restringir o uso dos seus dados pessoais. Para exercer seus direitos, entre em contato com nossa central de atendimento, que estará disponível para fornecer o suporte necessário."
                    />
                </section>
            </div>
        </BaseLayout>
    );
}
