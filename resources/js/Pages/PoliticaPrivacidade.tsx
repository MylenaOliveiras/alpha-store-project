import Collapse from "@/Components/Collapse";
import BaseLayout from "@/Layouts/BaseLayout";

export default function PoliticaPrivacidade() {
    return (
        <BaseLayout>
            <div className="p-6 bg-primary text-white">
                <h1 className="text-3xl font-extrabold mb-4">
                    Política de Privacidade
                </h1>
            </div>
            <div className="p-6">
                <p className="text-darkSurface dark:text-cream text-lg font-semibold">
                    Prezado cliente, a ALPHA entende que é fundamental explicar
                    de modo transparente nossos processos de tratamento de
                    dados, bem como esclarecer seus direitos como titular destes
                    dados. Esta política se aplica a todas as pessoas que
                    interagem com nossos serviços de comércio eletrônico na
                    plataforma web e no aplicativo móvel. Lembrando que alguns
                    dados são necessários para a prestação de nossos serviços.
                    Desta forma, caso você não os queira fornecer, poderá optar
                    por não utilizar nossa plataforma/aplicativo. Alguns outros
                    dados não terão o caráter obrigatório, mas a ausência de seu
                    consentimento poderá comprometer a prestação dos nossos
                    serviços a você, como é o caso de recursos terem sua
                    formatação e funcionalidade limitados em nossa
                    plataforma/aplicativo. A ALPHA é o controlador dos dados
                    pessoais tratados em nossa plataforma/aplicativo.{" "}
                </p>
                <section className="mt-6">
                    <Collapse
                        title="1. COMO COLETAMOS OS SEUS DADOS"
                        description="Nós coletamos seus dados a partir das seguintes fontes:
                    - Plataforma e Commerce: através de seu cadastro na plataforma, coletamos dados de identificação pessoal, dados de identificação eletrônica e dados financeiros. A totalidade dos dados coletados e seu uso estão descritos na sessão dados que coletamos. 

                    - Aplicativo e Commerce: oferecido nas lojas de terceiros como o Google Play Apple Store, nele também coletamos as informações referentes ao cadastro conforme mencionado no item acima. 

                    - Canais de atendimento: podemos coletar dados por meio dos canais de atendimento. Através de plataformas de terceiros, como: Facebook, Google, etc. Estas plataformas possuem suas próprias políticas de privacidade e os dados que coletamos são aqueles cadastrados e autorizados naquela plataforma, posteriormente compartilhados com a ALPHA. Dentro de nossa empresa esses dados são cuidados da mesma forma como os dados coletados diretamente por nós. Em relação ao tratamento de dados feitos pelas plataformas de terceiros, recomendamos que sejam lidas as políticas de privacidade das respectivas plataformas ."
                    />

                    <Collapse
                        title="2. DADOS QUE COLETAMOS"
                        description="A ALPHA coleta os seguintes dados:
                    - Dados de identificação pessoal: nome, CPF, RG, data de nascimento, endereço, telefone, e-mail.
                    - Dados de identificação eletrônica: endereço IP, dados de localização, cookies, logs de acesso.
                    - Dados financeiros: informações de cartão de crédito, histórico de compras, dados bancários.
                    "
                    />
                </section>
            </div>
        </BaseLayout>
    );
}
