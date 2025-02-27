<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $table = 'ENDERECO';
    public $timestamps = false;
    protected $primaryKey = 'ENDERECO_ID';

    protected $fillable = [
        'USUARIO_ID',
        'ENDERECO_CEP',
        'ENDERECO_LOGRADOURO',
        'ENDERECO_NUMERO',
        'ENDERECO_COMPLEMENTO',
        'ENDERECO_CIDADE',
        'ENDERECO_ESTADO',
        'ENDERECO_NOME', 
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'USUARIO_ID', 'USUARIO_ID');
    }
}
