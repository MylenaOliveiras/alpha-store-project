<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request)
{
    try {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = $request->user();

        if (!Hash::check($validated['current_password'], $user->USUARIO_SENHA)) {
            Log::error('Senha incorreta para o usuário:', ['email' => $user->USUARIO_EMAIL]);
            throw ValidationException::withMessages([
                'current_password' => 'A senha atual está incorreta.',
            ]);
        }

        $user->USUARIO_SENHA = Hash::make($validated['password']);
        $user->save();

        return redirect()->route('dashboard')->with('status', 'Senha atualizada com sucesso!');


    } catch (\Exception $e) {
        Log::error('Erro ao atualizar a senha:', ['message' => $e->getMessage()]);
        return response()->json(['error' => 'Erro ao atualizar a senha.'], 500);
    }
}

}
