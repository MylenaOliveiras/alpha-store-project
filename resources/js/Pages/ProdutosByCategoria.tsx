import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";

export default function ProdutosByCategoria({ produtos }) {
    console.log(produtos);

    return (
        <BaseLayout>
            <Head title="Produtos por categoria" />

            <h1>Produtos por categoria</h1>
        </BaseLayout>
    );
}
