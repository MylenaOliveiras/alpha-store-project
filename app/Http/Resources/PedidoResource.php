<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PedidoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->PEDIDO_ID,
            'usuario_id' => $this->USUARIO_ID,
            'endereco_id' => $this->ENDERECO_ID,
            'status_id' => $this->STATUS_ID,
            'data' => $this->PEDIDO_DATA,
            'status' => new PedidoStatusResource($this->whenLoaded('status')),
            'endereco' => new EnderecoResource($this->whenLoaded('endereco')),
            'itens' => PedidoItemResource::collection($this->whenLoaded('itens')),
        ];
    }
}

