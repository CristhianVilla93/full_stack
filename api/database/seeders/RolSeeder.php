<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rol::create(['rol' => 'admin', 'create_by' => null, 'update_by' => null]);
        Rol::create(['rol' => 'student', 'create_by' => null, 'update_by' => null]);
        Rol::create(['rol' => 'teacher', 'create_by' => null, 'update_by' => null]);
    }
}
