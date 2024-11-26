<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EnderecoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->ENDERECO_ID,
            'cep' => $this->ENDERECO_CEP,
            'logradouro' => $this->ENDERECO_LOGRADOURO,
            'numero' => $this->ENDERECO_NUMERO,
            'complemento' => $this->ENDERECO_COMPLEMENTO,
            'cidade' => $this->ENDERECO_CIDADE,
            'estado' => $this->ENDERECO_ESTADO,
            'nome' => $this->ENDERECO_NOME,
        ];
    }
}

