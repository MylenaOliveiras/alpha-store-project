<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CarrinhoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
{
    return [
        'usuario_id' => $this->USUARIO_ID,
        'produto_id' => $this->PRODUTO_ID,
        'quantidade' => $this->ITEM_QTD,
        'produto' => new ProdutoResource($this->whenLoaded('produto')),
         'imagens' => $this->whenLoaded('imagens', function () {
                return $this->imagens->map(function ($imagem) {
                    return $imagem->IMAGEM_URL;
                });
            })
    ];
}
}
