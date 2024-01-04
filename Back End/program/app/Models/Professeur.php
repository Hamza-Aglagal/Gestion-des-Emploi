<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class Professeur extends  Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'email', 'numero','password', 'type','token'];

    public function seances()
    {
        return $this->hasMany(Seance::class);
    }


    public function getJWTIdentifier()
    {
        return $this->getKey(); 
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
