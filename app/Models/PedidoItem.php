<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoItem extends Model
{
    use HasFactory;

    protected $table = 'PEDIDO_ITEM';
    public $timestamps = false;


    protected $fillable = [
        'PEDIDO_ID',
        'PRODUTO_ID',
        'ITEM_QTD',
        'ITEM_PRECO',
    ];

    public function produto()
    {
        return $this->belongsTo(Produto::class, 'PRODUTO_ID', 'PRODUTO_ID');
    }
}
