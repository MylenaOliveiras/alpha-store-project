export type IAddress = {
    id: number;
    nome: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cidade: string;
    estado: string;
    cep: string;
};

export type IProduct = {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    desconto: string;
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

export type ICart = {
    usuario_id: number;
    produto_id: number;
    produto: IProduct;
    quantidade: number;
};

export type IOrder = {
    id: number;
    endereco_id: number;
    usuario_id: number;
    status_id: number;
    status: {
        id: number;
        descricao: string;
    };
    data: string;
};
