<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeanceTemporaire extends Model
{
    use HasFactory;

    protected $fillable = ['date_id', 'professeur_id', 'salle_id', 'groupe_ids', 'jour'];


}
