<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarrinhoResource;
use App\Http\Resources\EnderecoResource;
use App\Models\Carrinho;
use App\Models\Endereco;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CarrinhoController extends Controller
{
    public function adicionarAoCarrinho(Request $request)
    {
      

        try {
                if (!Auth::check()) {
                    return redirect()->route('login')->with('message', 'Por favor, faça login para adicionar itens ao carrinho.');
                }
                
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
            $carrinho = Carrinho::with(['produto', 'imagens'])
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

    public function removerDoCarrinho($produto_id)
    {
        try {
        
            $usuario_id = Auth::id();

            $carrinhoItem = Carrinho::where('USUARIO_ID', $usuario_id)
                ->where('PRODUTO_ID', $produto_id)
                ->first();

            if ($carrinhoItem) {
                $carrinhoItem->delete();
                return redirect()->back()->with('success', 'Produto removido do carrinho com sucesso!');
            }

            return redirect()->back()->with('error', 'Produto não encontrado no carrinho');
        } catch (\Exception $e) {
            Log::error('Erro ao remover produto do carrinho:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao remover produto do carrinho');
        }
    }

    public function atualizarQuantidade(Request $request, $id)
{
    try {
        $validatedData = $request->validate([
            'quantidade' => 'required|integer|min:1',
        ]);

        $usuario_id = Auth::id();
        
        $item = Carrinho::where('USUARIO_ID', $usuario_id)
                        ->where('PRODUTO_ID', $id)
                        ->first();

        if ($item) {
            $item->ITEM_QTD = $validatedData['quantidade'];
            $item->save();

            return redirect()->back()->with('success', 'Item atualizado com sucesso!');
        }

        return redirect()->back()->with('error', 'Item não encontrado.');

    } catch (\Exception $e) {
        Log::error('Erro ao atualizar item no carrinho:', ['error' => $e->getMessage()]);
        return redirect()->back()->with('error', 'Erro ao atualizar item.');
    }
}

public function qtdItens(){
    $usuario_id = Auth::id();
    $cartItemsCount = Carrinho::where('USUARIO_ID', $usuario_id)->sum('ITEM_QTD');

    return Inertia::render('BaseLayout', [
        'auth' => [
            'user' => $usuario_id,
        ],
        'cartItemsCount' => $cartItemsCount,
    ]);
}


    public function listarResumo(){
        try {
            $carrinho = Carrinho::with(['produto', 'imagens'])
                ->where('USUARIO_ID', Auth::id())
                ->get();

            return Inertia::render('FinalizarPedido/Index', [
                'carrinho' => CarrinhoResource::collection($carrinho)
            ]);
        } catch (\Exception $e) {
            Log::error('Erro ao exibir carrinho:', ['error' => $e->getMessage()]);
            return Inertia::render('Carrinho/Resumo', [
                'message' => 'Erro ao exibir carrinho',
                'error' => $e->getMessage(),
            ]);
        }
    }



    public function mostrarDados()
    {
        $userId = Auth::id();

        $enderecos = Endereco::where('USUARIO_ID', $userId)->get();
        $enderecosResource = EnderecoResource::collection($enderecos);

        $resumoPedido = Carrinho::with('produto')->where('USUARIO_ID', $userId)->get();
        $resumoPedidoResource = CarrinhoResource::collection($resumoPedido);

        return Inertia::render('FinalizarPedido/Index', [
            'enderecos' => $enderecosResource,
            'resumoPedido' => $resumoPedidoResource,
        ]);
    }
}

    
