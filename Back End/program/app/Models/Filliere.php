<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filliere extends Model
{
    use HasFactory;

    protected $fillable = ['nom'];


    public function groupes()
    {
        return $this->hasMany(Groupe::class);
    }

    public function models()
    {
        return $this->hasMany(Modele::class);
    }

    
}
