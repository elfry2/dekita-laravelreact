<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/login', function() {
    return redirect(env('FRONTEND_URL') . '/email-verified');
});

require __DIR__.'/auth.php';
