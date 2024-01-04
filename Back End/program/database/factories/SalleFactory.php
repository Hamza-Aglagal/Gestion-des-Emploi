<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Salle>
 */
class SalleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $noms = ['101', '102', '103','104', '105', 
                '201', '202', '203','204', '205',
                '301', '302', '303','304', '305',
                '401', '402', '403','404', '405',
                '501', '502', '503','504', '505',
                ]; 
        $adresses = ['Centre', 'Gueliz'];
    
        return [
            'nom' => faker()->randomElement($noms),
            'adresse' => faker()->randomElement($adresses),
        ];
    }
}
