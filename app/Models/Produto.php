<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $table = 'PRODUTO';
    public $timestamps = false;
    protected $primaryKey = 'PRODUTO_ID';

    public function estoque()
    {
        return $this->hasOne(ProdutoEstoque::class, 'PRODUTO_ID', 'PRODUTO_ID');
    }

    public function imagens()
    {
        return $this->hasMany(ProdutoImagem::class, 'PRODUTO_ID', 'PRODUTO_ID');
    }

     public function categoria()
    {
        return $this->belongsTo(ProdutoCategoria::class, 'CATEGORIA_ID', 'CATEGORIA_ID');
    }

    public function carrinho()
    {
        return $this->hasMany(Carrinho::class, 'PRODUTO_ID', 'PRODUTO_ID');
    }
}

