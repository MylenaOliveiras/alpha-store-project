<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Verifique se o usuário existe com o e-mail fornecido
        $user = User::where('USUARIO_EMAIL', $request->email)->first();

        // Se o usuário não for encontrado, lance uma exceção
        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['Este e-mail não está registrado.'],
            ]);
        }

        // Aqui tentamos resetar a senha do usuário. Caso seja bem-sucedido, atualizamos a senha no modelo.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                // Atualiza a senha e o token de lembrança
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                // Dispara o evento de redefinição de senha
                event(new PasswordReset($user));
            }
        );

        // Se a redefinição for bem-sucedida, redireciona para o login
        if ($status == Password::PASSWORD_RESET) {
            return redirect()->route('login')->with('status', __($status));
        }

        // Se houver um erro na redefinição, lançar uma exceção
        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}

