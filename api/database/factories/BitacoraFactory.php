<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bitacora>
 */
class BitacoraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bitacora' => fake()->text($maxNbChars = 10),
            'usuario_nombre' => fake()->name(), 
            'user_id'=>Usuario::all()->random(),
            'ip' => fake()->ipv4(), 
            'so' => fake()->safeColorName(), 
            'navegador' => fake()->userAgent()
        ];
    }
}
