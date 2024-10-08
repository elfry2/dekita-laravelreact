<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Administrator',
                'email' => 'admin@localhost',
                'password' => Hash::make('admin@localhost'),
                'username' => 'admin',
                'role_id' => 1,
            ],
            [
                'name' => 'Standard User',
                'email' => 'user@localhost',
                'password' => Hash::make('user@localhost'),
                'username' => 'user',
                'role_id' => 2,
            ],
        ];

        foreach($users as $user) \App\Models\User::create($user);
    }
}
