<?php

namespace Database\Factories;

use App\Models\Pagina;
use App\Models\Rol;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enlace>
 */
class EnlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'page_id'=>Pagina::inRandomOrder()->first()->id,
            'rol_id'=>Rol::inRandomOrder()->first()->id,
            'description' => fake()->text($maxNbChars = 20), 
            'create_by'=> Usuario::all()->random(),     
            'update_by'=> Usuario::all()->random(),
        ];
    }
}
