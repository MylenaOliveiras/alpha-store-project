<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarrinhoResource;
use App\Models\Carrinho;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CarrinhoController extends Controller
{
    public function adicionarAoCarrinho(Request $request)
    {

        try {
            $validatedData = $request->validate([
                'produto_id' => 'required|exists:PRODUTO,PRODUTO_ID',
                'quantidade' => 'required|integer|min:1',
            ]);


            $usuario_id = Auth::id();

            $produto_id = $validatedData['produto_id'];

            $carrinhoItem = Carrinho::where('USUARIO_ID', $usuario_id)
                                    ->where('PRODUTO_ID', $produto_id)
                                    ->first();


            if ($carrinhoItem) {
                $carrinhoItem->ITEM_QTD += $validatedData['quantidade'];
                $carrinhoItem->save();
            } else {
                Carrinho::create([
                    'USUARIO_ID' => $usuario_id,
                    'PRODUTO_ID' => $produto_id,
                    'ITEM_QTD' => $validatedData['quantidade'],
                ]);
            }

            return redirect()->back()->with('success', 'Produto adicionado ao carrinho com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao adicionar produto ao carrinho:', ['error' => $e->getMessage()]);

            return redirect()->back()->with('error', 'Erro ao adicionar produto ao carrinho');
        }
    }

    public function exibirCarrinho()
    {
        try {
            $carrinho = Carrinho::with('produto')
                ->where('USUARIO_ID', Auth::id())
                ->get();

            return Inertia::render('Carrinho/Index', [
                'carrinho' => CarrinhoResource::collection($carrinho)
            ]);
        } catch (\Exception $e) {
            Log::error('Erro ao exibir carrinho:', ['error' => $e->getMessage()]);
            return Inertia::render('Carrinho/Index', [
                'message' => 'Erro ao exibir carrinho',
                'error' => $e->getMessage(),
            ]);
        }
    }
}