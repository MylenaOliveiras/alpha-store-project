<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProdutoResource;
use App\Models\Produto;
use Inertia\Inertia;

class ProdutoController extends Controller
{
    public function index()
    {
        $produtos = Produto::with(['estoque', 'imagens'])->get();

        return Inertia::render('Produtos', [
            'produtos' => ProdutoResource::collection($produtos)
        ]);
    }

    public function show($id)
    {
        $produto = Produto::with(['estoque', 'imagens'])->find($id);
        if ($produto) {
            return Inertia::render('ProdutoShow', [
                'produto' => new ProdutoResource($produto)
            ]);
        } else {
            return redirect()->route('produtos.index')->with('error', 'Produto não encontrado');
        }
    }
}



