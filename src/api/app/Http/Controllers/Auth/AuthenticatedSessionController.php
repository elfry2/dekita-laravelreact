<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): Response
    {
        $request->authenticate();

        // $request->session()->regenerate();

        // return response()->noContent();

        $authenticatedUser = Auth::user();

        if(!$authenticatedUser->email_verified_at) return response([
            'errors' => [
                'messages' => [
                    'Your email has not yet been verified. Please click on the verification link to activate your account.'
                ]
            ]
        ], 401);

        $authenticatedUser->token = $authenticatedUser
            ->createToken('main')
            ->plainTextToken;

        return $authenticatedUser;
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
