<?php

namespace App\Http\Controllers;

use App\Http\Resources\EnderecoResource;
use Illuminate\Http\Request;
use App\Models\Endereco;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EnderecoController extends Controller
{
    public function salvaEndereco(Request $request){
        $request->validate([
            'cep' => 'required|max:10',
            'logradouro' => 'required|max:255',
            'numero' => 'required|max:10',
            'complemento' => 'nullable|max:255',
            'cidade' => 'required|max:100',
            'estado' => 'required|max:2',
            'nome' => 'required|max:255',
        ]);

        try {
            Endereco::create([
                'USUARIO_ID' => Auth::id(),
                'ENDERECO_CEP' => $request->input('cep'),
                'ENDERECO_LOGRADOURO' => $request->input('logradouro'),
                'ENDERECO_NUMERO' => $request->input('numero'),
                'ENDERECO_COMPLEMENTO' => $request->input('complemento'),
                'ENDERECO_CIDADE' => $request->input('cidade'),
                'ENDERECO_ESTADO' => $request->input('estado'),
                'ENDERECO_NOME' => $request->input('nome'),
            ]);
            return redirect()->back()->with('success', 'Endereço salvo com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao salvar endereço:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao salvar endereço');
        }
    }

    public function deletaEndereco($endereco_id){
        try {
            $endereco = Endereco::find($endereco_id);
            $endereco->delete();
            return redirect()->back()->with('success', 'Endereço deletado com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao deletar endereço:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao deletar endereço');
        }
    }


    public function listaEnderecos(){
        try {

    $enderecos = Endereco::where('USUARIO_ID', Auth::id())->get();
     return Inertia::render('FinalizarPedido/Index', [
                'enderecos' => EnderecoResource::collection($enderecos)
            ]);

        } catch (\Exception $e) {
            Log::error('Erro ao listar endereços:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao listar endereços');
        }
    }

    public function listaEnderecosDashboard(){
        try {
            $enderecos = Endereco::where('USUARIO_ID', Auth::id())->get();
            return Inertia::render('Dashboard', [
                'enderecos' => EnderecoResource::collection($enderecos)
            ]);
        } catch (\Exception $e) {
            Log::error('Erro ao listar endereços:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao listar endereços no dashboard');
        }
    }

    public function editaEndereco($endereco_id){
        try {
            $endereco = Endereco::find($endereco_id);
            return view('endereco.edit', ['endereco' => $endereco]);
        } catch (\Exception $e) {
            Log::error('Erro ao editar endereço:', ['error' => $e->getMessage()]);
            return redirect()->back()->with('error', 'Erro ao editar endereço');
        }
    }


    
}
