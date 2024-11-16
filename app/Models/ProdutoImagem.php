<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdutoImagem extends Model
{
    protected $table = 'PRODUTO_IMAGEM';
    public $timestamps = false;
    protected $primaryKey = 'IMAGEM_ID';

    public function produto() { return $this->belongsTo(Produto::class, 'PRODUTO_ID', 'PRODUTO_ID'); }
}
