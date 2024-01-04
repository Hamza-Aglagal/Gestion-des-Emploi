<?php

namespace App\Http\Controllers;


use App\Models\Admin;
use App\Models\Professeur;
use App\Models\Student;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use Firebase\JWT\JWT;


class AuthController extends Controller
{
    

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $userType = $this->getUserType($credentials['email']);


        if ($userType === 'professeur') {
            $user = Professeur::where('email', $credentials['email'])->first();
        } elseif ($userType === 'admin') {
            $user = Admin::where('email', $credentials['email'])->first();
        } else {
            $user = Student::where('email', $credentials['email'])->first();
        }

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 200);
        }

        // $token = auth()->guard('api')->login($user);
        // $user->token = $token;
        // $user->save();
        $payload = [
            'iss' => 'http://127.0.0.1:8000/api/login',
            'iat' => time(),
            'exp' => time() + (60 * 60), 
            'nbf' => time(),
            'jti' => uniqid(),
            'sub' => $user->id,
            'userType' => $userType,
        ];
    
        // Generate the token
        $token = JWT::encode($payload, env('JWT_SECRET'), 'HS256');
    
        $user->token = $token;
        $user->save();

        $userData = [
            'prenom' => $user->prenom,
            'nom' => $user->nom,
            'email' => $user->email,
            'type' => $user->type,
            
        ];

        // return $user ;
        return response()->json(['token' => $token, 'userType'=> $userType, 'userData' => $userData ]);
    }


    private function getUserType($email)
    {
        if (Str::endsWith($email, '@emsi-professeurs.ma')) {
            return 'professeur';
        } elseif (Str::endsWith($email, '@emsi-admins.ma')) {
            return 'admin';
        } elseif (Str::endsWith($email, '@emsi-edu.ma')) {
            return 'student';
        }       
    }


}
