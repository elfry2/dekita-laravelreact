<?php

namespace App\Http\Controllers;

use App\Models\Preference;
use Illuminate\Http\Request;

class PreferenceController extends Controller
{
    public function getRouteKeyName(): string {
        return 'key';
    }

    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     //
    // }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     //
    // }

    /**
     * Display the specified resource.
     */
    public function show(Preference $preference)
    {
        return $preference->value;
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Preference $preference)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Preference $preference)
    {
        $model = '\\App\\Models\\Preference';

        $request->merge([
            'user_id' => $request->user->id,
        ]);

        $validated = (object) $request->validate([
            'key' => 'required',
            'value' => 'nullable',
            'user_id' => 'exists:users,id'
        ]);

        $model::updateOrCreate([
            'user_id' => $validated->user_id,
            'key' => $validated->key,
        ], [
            'value' => $validated->value,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Preference $preference)
    // {
    //     //
    // }
}
