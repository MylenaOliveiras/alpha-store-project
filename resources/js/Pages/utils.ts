export type IProduct = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    desconto: number;
    categoria_id: number;
    ativo: boolean;
    imagens: string[];
    estoque: number;
};

export type ICategory = {
    id: number;
    nome: string;
    descricao: string;
    ativo: boolean;
};
