<?php

namespace Database\Seeders\User;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class UserPermission extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create([
            'name' => 'users.view'
        ]);

        Permission::create([
            'name' => 'users.create'
        ]);

        Permission::create([
            'name' => 'users.update'
        ]);

        Permission::create([
            'name' => 'users.delete'
        ]);
    }
}
