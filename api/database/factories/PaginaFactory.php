<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pagina>
 */
class PaginaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url'=> fake()->url(),
            'name' => fake()->domainName(),
            'description'=>fake()->text($maxNbChars = 75),
            'icono' => fake()->jobTitle(),
            'tipo' => fake()->domainWord(),
            'create_by'=> Usuario::all()->random(),
            'update_by'=> Usuario::all()->random()
        ];
    }
}
