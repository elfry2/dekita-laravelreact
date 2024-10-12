<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $model = '\\App\\Models\\RoleSeeder';

        $records = [
            [
                'name' => 'Administrator'
            ],
            [
                'name' => 'Standard User'
            ],
        ];

        foreach($records as $record) $model::create($record);
    }
}
