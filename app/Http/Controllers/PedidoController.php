<?php
namespace App\Http\Controllers;

use App\Http\Resources\EnderecoResource;
use App\Http\Resources\PedidoResource;
use Illuminate\Http\Request;
use App\Models\Carrinho;
use App\Models\Endereco;
use App\Models\Pedido;
use App\Models\PedidoItem;
use App\Models\Produto;
use App\Models\Estoque; 
use App\Models\ProdutoEstoque;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PedidoController extends Controller
{
    public function finalizarPedido(Request $request)
    {
        try {
            $usuario_id = Auth::id();
            $itensCarrinho = Carrinho::where('USUARIO_ID', $usuario_id)->get();
            
            if ($itensCarrinho->isEmpty()) {
                return redirect()->back()->with('error', 'Seu carrinho está vazio.');
            }

            $pedido = new Pedido();
            $pedido->ENDERECO_ID = $request->endereco_id;
            $pedido->USUARIO_ID = $usuario_id;
            $pedido->STATUS_ID = 1;
            $pedido->PEDIDO_DATA = now()->toDateTimeString();
            $pedido->save();

            foreach ($itensCarrinho as $item) {
                PedidoItem::create([
                    'PEDIDO_ID' => $pedido->PEDIDO_ID,
                    'PRODUTO_ID' => $item->PRODUTO_ID,
                    'ITEM_QTD' => $item->ITEM_QTD,
                    'ITEM_PRECO' => $item->produto->PRODUTO_PRECO,
                ]);

                $estoque = ProdutoEstoque::where('PRODUTO_ID', $item->PRODUTO_ID)->first();
                if ($estoque) {
                    $estoque->PRODUTO_QTD -= $item->ITEM_QTD;
                    $estoque->save();
                }

                $item->delete();
            }

            return redirect()->route('pedidos.show', $pedido->id)->with('success', 'Pedido finalizado com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao finalizar pedido:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao finalizar pedido');
        }
    }

    public function mostrarDados()
    {
        $userId = Auth::id();

        $pedidos = Pedido::with('status')->where('USUARIO_ID', $userId)->get();
        $pedidosResource = PedidoResource::collection($pedidos);

        $enderecos = Endereco::where('USUARIO_ID', $userId)->get();
        $enderecosResource = EnderecoResource::collection($enderecos);



        return Inertia::render('Dashboard', [
            'pedidos' => $pedidosResource,
            'enderecos' => $enderecosResource
        ]);
    }

    public function show($pedido_id)
{
    $pedido = Pedido::with(['itens.produto.imagens', 'endereco', 'status'])->find($pedido_id);

    if (!$pedido) {
        return redirect()->route('pedidos.index')->with('error', 'Pedido não encontrado.');
    }

    return Inertia::render('Pedidos/Show', [
        'pedido' => new PedidoResource($pedido), 
    ]);
}

}