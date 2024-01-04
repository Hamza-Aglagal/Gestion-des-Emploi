<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Niveau;
use App\Models\Filliere;
use App\Models\Modele;
use Illuminate\Http\Request;

class ModeleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Modules = Modele::all();
        return $Modules ;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function AllModulesWithNivFillier(int $niveau, $fillier)
    {

        $niveau = Niveau::where('id', $niveau)->first();
        $fillier = Filliere::where('id', $fillier)->first();

        $Modules = Modele::where('Niveau_id', $niveau->id)
        ->where('filliere_id', $fillier->id)
        ->get();
        
        return $Modules;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'filliere_id' => 'required|exists:fillieres,id',
            'Niveau_id' => 'required|exists:niveaux,id',
        ]);

         // verifier si la date est disponible
         $existingModule = Modele::where('nom', $request->nom)
         ->where('filliere_id', $request->filliere_id)
         ->where('Niveau_id', $request->Niveau_id)
         ->first();
         if ($existingModule) {
         return "Module existe déja !";
         }

    
        $Modules = Modele::create([
            'nom' => $request->nom,
            'filliere_id' => $request->filliere_id,
            'Niveau_id' => $request->Niveau_id,
        ]);
    
        return "created successfully.." ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Modele  $modele
     * @return \Illuminate\Http\Response
     */
    public function AllModulesOfProf(int $profId)
    {
        // Retrieve the modules directly associated with the professor's seances
        $modules = Seance::where('professeur_id', $profId)
                           ->distinct()
                           ->pluck('module_id');
    
        // Get the model instances for the retrieved module IDs
        $modules = Modele::whereIn('id', $modules)->get();
    
        return $modules;
    }
    
     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Modele  $modele
     * @return \Illuminate\Http\Response
     */
    public function show(Modele $modele)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Modele  $modele
     * @return \Illuminate\Http\Response
     */
    public function edit(Modele $modele)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Modele  $modele
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Modele $modele)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Modele  $modele
     * @return \Illuminate\Http\Response
     */
    public function destroy(Modele $modele)
    {
        //
    }
}
