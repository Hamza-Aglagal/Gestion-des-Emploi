<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupe extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'filliere_id','Niveau_id'];


    public function filliere()
    {
        return $this->belongsTo(Filliere::class);
    }

    public function seances()
    {
        return $this->hasMany(Seance::class, 'groupe_id');
    }

    public function niveau()
    {
        return $this->belongsTo(Niveau::class, 'Niveau_id');
    }
}
