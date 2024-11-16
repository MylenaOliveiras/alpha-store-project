<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdutoEstoque extends Model
{
    protected $table = 'PRODUTO_ESTOQUE';
    public $timestamps = false;
    protected $primaryKey = 'PRODUTO_ID';

    public function produto() { return $this->belongsTo(Produto::class, 'PRODUTO_ID', 'PRODUTO_ID'); }
}

