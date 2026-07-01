<?php

namespace Database\Seeders\User;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CreateUser extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create(
            [
                'email' => 'user@example.com',
                'name' => 'User',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]
        );

        $admin = User::create(
            [
                'email' => 'admin@example.com',
                'name' => 'Admin',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]
        );

        $superadmin = User::create(
            [
                'email' => 'superadmin@example.com',
                'name' => 'Super Admin',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]
        );

        $user->assignRole('User');
        $admin->assignRole('Admin');
        $superadmin->assignRole('Super Admin');
    }
}
