<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    use HasFactory;

    protected $fillable = ['jour', 'salle_id', 'date_id', 'groupe_id', 'professeur_id', 'module_id'];

    public function groupes()
    {
        return $this->belongsTo(Groupe::class, 'groupe_id');
    }

    public function dateHeurs()
    {
        return $this->belongsTo(DateHeur::class, 'date_id');
    }

    public function salle()
    {
        return $this->belongsTo(Salle::class, 'salle_id');
    }


    public function professeur()
    {
        return $this->belongsTo(Professeur::class);
    }

    public function module()
    {
        return $this->belongsTo(Modele::class);
    }

  
    
    
}
