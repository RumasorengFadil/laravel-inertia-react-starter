<?php

namespace Database\Seeders\User\RolePermissions;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Spatie\Permission\PermissionRegistrar;

class UserRolePermission extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        $user = Role::findByName('User');

        $user->givePermissionTo([]);
    }
}
