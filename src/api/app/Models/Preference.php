<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Preference extends Model
{
    /** @use HasFactory<\Database\Factories\PreferenceFactory> */
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
