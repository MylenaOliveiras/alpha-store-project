<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdutoCategoria extends Model
{
    protected $table = 'CATEGORIA';
    protected $primaryKey = 'CATEGORIA_ID';
    public $timestamps = false;
}
