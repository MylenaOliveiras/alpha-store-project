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
    return $this->belongsTo('App\Models\Usuario', 'USUARIO_ID', 'USUARIO_ID');
}

    public function endereco()
{
    return $this->belongsTo('App\Models\Endereco', 'ENDERECO_ID', 'ENDERECO_ID');
}

public function status()
{
    return $this->belongsTo('App\Models\PedidoStatus', 'STATUS_ID', 'STATUS_ID');
}
public function itens()
{
    return $this->hasMany('App\Models\PedidoItem', 'PEDIDO_ID', 'PEDIDO_ID');
}


}

