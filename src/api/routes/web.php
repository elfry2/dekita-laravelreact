<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/login', function() {
    return redirect(env('FRONTEND_URL'));
});

require __DIR__.'/auth.php';
