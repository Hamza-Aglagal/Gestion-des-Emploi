<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DateHeur extends Model
{
    use HasFactory;

    protected $fillable = ['heur_debut', 'heur_fin', 'type', 'type_Stp'];

    public function seances()
    {
        return $this->hasMany(Seance::class, 'date_id');
    }

}
