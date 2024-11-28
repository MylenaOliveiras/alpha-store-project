<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'USUARIO_NOME' => ['required', 'string', 'max:255'],
            'USUARIO_EMAIL' => ['required', 'string', 'email', 'max:255'],
        ];
    }

    public function attributes()
    {
        return [
            'USUARIO_NOME' => 'nome',
            'USUARIO_EMAIL' => 'email',
        ];
    }
}
