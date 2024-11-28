<?php

use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\CarrinhoController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProdutoController;
use App\Http\Resources\CategoriaResource;
use App\Http\Resources\ProdutoResource;
use App\Models\Carrinho;
use App\Models\Produto;
use App\Models\ProdutoCategoria;

Route::get('/', function () {
    $produtos = Produto::with(['estoque', 'imagens', 'categoria'])->get();
    $categorias = ProdutoCategoria::all();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'produtos' => ProdutoResource::collection($produtos),
        'categorias' => CategoriaResource::collection($categorias)
    ]);
});

Route::get('/duvidas', function () {
    return Inertia::render('Duvidas');
})->name('duvidas');

Route::get('/institucional', function () {
    return Inertia::render('Institucional');
})->name('institucional');

Route::get('/sac', function () {
    return Inertia::render('Sac');
})->name('sac');

Route::get('/politicaPrivacidade', function () {
    return Inertia::render('PoliticaPrivacidade');
})->name('politicaPrivacidade');

Route::prefix('produtos')->group(function () {
    Route::get('/', [ProdutoController::class, 'index'])->name('produtos.index');
    Route::get('{id}', [ProdutoController::class, 'show'])->name('produtos.show');
    Route::get('/categoria/{categoria_id}', [ProdutoController::class, 'indexByCategoria'])->name('produtos.indexByCategoria');
    Route::get('/buscar/{search}', [ProdutoController::class, 'productsBySearch'])->name('produtos.search');
});

Route::middleware(['auth'])->post('/update-password', [PasswordController::class, 'update']);

Route::get('/finalizarPedido', function () {
    return Inertia::render('FinalizarPedido/Index');
})->middleware(['auth', 'verified'])->name('finalizarPedido');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [PedidoController::class, 'mostrarDados'])->name('dashboard');

    Route::prefix('dashboard')->group(function () {
        Route::put('/update', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/destroy', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::prefix('carrinho')->group(function () {
        Route::get('/', [CarrinhoController::class, 'exibirCarrinho'])->name('carrinho.index');
        Route::post('/adicionar', [CarrinhoController::class, 'adicionarAoCarrinho'])->middleware('auth')->name('carrinho.adicionar');
        Route::delete('/remover/{produto_id}', [CarrinhoController::class, 'removerDoCarrinho'])->name('carrinho.remover');
        Route::patch('/atualizar/{produto_id}', [CarrinhoController::class, 'atualizarQuantidade'])->name('carrinho.atualizar');
    });

    Route::prefix('pedidos')->group(function () {
        Route::get('/', [PedidoController::class, 'index'])->name('pedidos.index');
        Route::post('/finalizar', [PedidoController::class, 'finalizarPedido'])->name('pedidos.finalizar');
        Route::get('/{pedido_id}', [PedidoController::class, 'show'])->name('pedidos.show');
    });

    Route::prefix('finalizarPedido')->group(function () {
        Route::get('/', [CarrinhoController::class, 'mostrarDados'])->name('finalizarPedido');
        Route::post('/endereco/salvar', [EnderecoController::class, 'salvaEndereco'])->name('finalizarPedido.endereco.salvar');
        Route::delete('/endereco/deletar/{endereco_id}', [EnderecoController::class, 'deletaEndereco'])->name('finalizarPedido.endereco.deletar');
    });
});

require __DIR__.'/auth.php';
