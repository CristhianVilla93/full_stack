<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       $this->call(AlumnoSeeder::class);
       $this->call(DocenteSeeder::class);
    //    $this->call(CursoSeeder::class);


       $this->call(PersonaSeeder::class);
       $this->call(RolSeeder::class);
       $this->call(UsuarioSeeder::class);
       
       $this->call(PaginaSeeder::class);
       $this->call(EnlaceSeeder::class);
       $this->call(BitacoraSeeder::class);
    }
}

