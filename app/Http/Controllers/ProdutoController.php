<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaResource;
use App\Http\Resources\ProdutoResource;
use App\Models\Produto;
use App\Models\ProdutoCategoria;
use Inertia\Inertia;

class ProdutoController extends Controller
{
    public function index()
    {
        $produtos = Produto::with(['estoque', 'imagens'])->get();
        $categorias = ProdutoCategoria::all();

        return Inertia::render('Produtos', [
            'produtos' => ProdutoResource::collection($produtos),
            'categorias' => CategoriaResource::collection($categorias)
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

    public function indexByCategoria($categoria_id)
    {
        $produtos = Produto::with(['estoque', 'imagens'])
            ->whereHas('categoria', function ($query) use ($categoria_id) {
                $query->where('CATEGORIA_ID', $categoria_id);
            })
            ->get();

            $categorias = ProdutoCategoria::where('CATEGORIA_ID', $categoria_id)->get();

       return Inertia::render('Produtos', [
            'produtos' => ProdutoResource::collection($produtos),
            'categorias' => CategoriaResource::collection($categorias)
        ]);
    }

    public function productsBySearch($search)
    {
        $produtos = Produto::with(['estoque', 'imagens'])
            ->where('PRODUTO_NOME', 'like', "%$search%")
            ->get();

            $categorias = ProdutoCategoria::whereIn('CATEGORIA_ID', $produtos->pluck('CATEGORIA_ID'))->get();

        if ($produtos->isEmpty()) {
            return Inertia::render('Produtos', [
                'message' => 'Nenhum produto encontrado para a busca: ' . $search,
                'produtos' => [],
            ]);
        }

        return Inertia::render('Produtos', [
            'produtos' => ProdutoResource::collection($produtos),
            'categorias' => CategoriaResource::collection($categorias)
        ]);
    }

}



