<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Encadre extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'professeur_id', 'groupe_id'];

    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }
}
