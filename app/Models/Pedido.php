<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $table = 'PEDIDO';
    public $timestamps = false;
    protected $primaryKey = 'PEDIDO_ID';

    protected $fillable = [
        'USUARIO_ID',
        'ENDERECO_ID',
        'STATUS_ID',
        'PEDIDO_DATA',
    ];

 public function usuario()
{
    return $this->belongsTo(User::class, 'USUARIO_ID', 'USUARIO_ID');
}

    public function endereco()
{
    return $this->belongsTo(Endereco::class, 'ENDERECO_ID', 'ENDERECO_ID');
}

public function status()
{
    return $this->belongsTo(PedidoStatus::class, 'STATUS_ID', 'STATUS_ID');
}
public function itens()
{
    return $this->hasMany(PedidoItem::class, 'PEDIDO_ID', 'PEDIDO_ID');
}


}

