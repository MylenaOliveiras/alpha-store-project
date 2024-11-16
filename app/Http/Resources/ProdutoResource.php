<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProdutoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->PRODUTO_ID,
            'nome' => $this->PRODUTO_NOME,
            'descricao' => $this->PRODUTO_DESC,
            'preco' => $this->PRODUTO_PRECO,
            'desconto' => $this->PRODUTO_DESCONTO,
            'categoria_id' => $this->CATEGORIA_ID,
            'ativo' => $this->PRODUTO_ATIVO,
            'estoque' => $this->whenLoaded('estoque', function () {
                return $this->estoque->PRODUTO_QTD;
            }),
            'imagens' => $this->whenLoaded('imagens', function () {
                return $this->imagens->map(function ($imagem) {
                    return $imagem->IMAGEM_URL;
                });
            })
        ];
    }
}
