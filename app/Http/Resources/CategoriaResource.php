<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoriaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->CATEGORIA_ID,
            'nome' => $this->CATEGORIA_NOME,
            'descricao' => $this->CATEGORIA_DESC,
            'ativo' => $this->CATEGORIA_ID,
        ];
    }
}
