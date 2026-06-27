<?php

namespace Database\Seeders\User;

use Database\Seeders\User\RolePermissions\AdminRolePermission;
use Database\Seeders\User\RolePermissions\SuperAdminRolePermission;
use Database\Seeders\User\RolePermissions\UserRolePermission;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            UserPermission::class,
            UserRoles::class,
            UserRolePermission::class,
            AdminRolePermission::class,
            SuperAdminRolePermission::class,
            CreateUser::class,
        ]);
    }
}
