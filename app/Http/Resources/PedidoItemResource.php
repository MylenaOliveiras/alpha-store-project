<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PedidoItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'pedido_id' => $this->PEDIDO_ID,
            'produto_id' => $this->PRODUTO_ID,
            'quantidade' => $this->ITEM_QTD,
            'item_preco' => $this->ITEM_PRECO,
            'produto' => new ProdutoResource($this->whenLoaded('produto')),
            
        ];
    }
}
