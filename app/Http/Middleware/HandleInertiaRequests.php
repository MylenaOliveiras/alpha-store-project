<?php

namespace App\Http\Middleware;

use App\Models\Carrinho;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'cartItemsCount' => function () {
                $user = Auth::user();
                return $user ? Carrinho::where('USUARIO_ID', $user->USUARIO_ID)->sum('ITEM_QTD') : 0;
            },
        ];
    }
}
