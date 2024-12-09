<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'username' => 'test',
        //     'email' => 'test@example.com',
        // ]);

        $seeders = [
            'RoleSeeder',
            'UserSeeder',
        ];

        foreach($seeders as $seeder)
            (new ('\\Database\\Seeders\\' . $seeder)())->run();
    }
}
