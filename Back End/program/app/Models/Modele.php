<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modele extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'filliere_id', 'Niveau_id'];


    public function model()
    {
        return $this->belongsTo(Filiere::class);
    }

}
