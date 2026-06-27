<?php

namespace Database\Seeders\User;

use App\Models\Role;
use Illuminate\Database\Seeder;

class UserRoles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'User'
        ]);

        Role::create([
            'name' => 'Admin'
        ]);

        Role::create([
            'name' => 'Super Admin'
        ]);
    }
}
