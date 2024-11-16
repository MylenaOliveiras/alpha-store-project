<?php

use App\Http\Controllers\CarrinhoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProdutoController;
use App\Http\Resources\CategoriaResource;
use App\Http\Resources\ProdutoResource;
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
        'categorias' =>  CategoriaResource::collection($categorias)
    ]);
});

Route::get('/produtos', [ProdutoController::class, 'index'])->name('produtos.index');
Route::get('/produtos/{id}', [ProdutoController::class, 'show'])->name('produtos.show');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/carrinho/adicionar', [CarrinhoController::class, 'adicionarAoCarrinho'])->name('carrinho.adicionar');
    Route::get('/carrinho', [CarrinhoController::class, 'exibirCarrinho'])->name('carrinho.index');
});

require __DIR__.'/auth.php';
