<?php

namespace Database\Factories;

use App\Models\Persona;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'person_id'=> Persona::all()->random(),
            'rol_id'=>  optional(Rol::inRandomOrder()->first())->id,   
            'usuario' => fake()->userName(),
            'fecha' => fake()->date(),  
            'password' => '12345', // password
            'create_by'=> 1,      
            'update_by'=> 1,
        ];
    }
}
