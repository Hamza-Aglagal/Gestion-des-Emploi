<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Filliere;
use App\Models\Niveau;
use App\Models\Seance;
use App\Models\Groupe;
use Illuminate\Http\Request;

class GroupeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groupe = Groupe::all();
        return $groupe;
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
            'Niveau_id' => 'required|exists:niveaux,id',
            'filliere_id' => 'required|exists:fillieres,id',
        ]);

         // verifier si groupe exist
         $existingGroupe = Groupe::where('nom', $request->nom)
         ->where('filliere_id', $request->filliere_id)
         ->where('Niveau_id', $request->Niveau_id)
         ->first();
         if ($existingGroupe) {
         return "Groupe existe déja !";
         }


    
         $groupe = new Groupe();
         $groupe->fill($request->all());
         
         if (!$request->has('Niveau_id')) {
             return abort(400, 'Missing Niveau_id field');
         }
         
         $groupe->Niveau_id = $request->Niveau_id;
         
         $groupe->save();

        // $groupe = Groupe::create($request->all());
    
        return  'successfuly' ;

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Groupe  $groupe
     * @return \Illuminate\Http\Response
     */
    public function AllgroupeActive()
{
    $currentDay = Carbon::now()->locale('fr');
    $dayName = $currentDay->translatedFormat('l');
    
    $currentTime = Carbon::now()->format('H:i:s');

    // Retrieve seances in the current time
    $seancesEnligne = Seance::whereHas('dateHeurs', function ($query) use ($currentTime) {
        $query->where('heur_debut', '<=', $currentTime)
              ->where('heur_fin', '>=', $currentTime);
    })->where('jour', $dayName)
      ->with(['groupe', 'salle', 'dateHeurs', 'groupe.filliere', 'groupe.niveau'])
      ->get();

    // Extract necessary attributes
    $groupesEnLigne = $seancesEnligne->pluck('groupe');
    
    // Retrieve all groupes
    $allGroupes = Groupe::all();
    
    // Calculate groupes non en ligne
    $groupesNonEnLigne = $allGroupes->diff($groupesEnLigne);

    return [
        'groupes_en_ligne' => $seancesEnligne,
        'groupes_non_en_ligne' => $groupesNonEnLigne,
    ];
}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Groupe  $groupe
     * @return \Illuminate\Http\Response
     */
    public function AllGroupeWithNivFillier(int $niveau, $fillier)
    {

        $niveau = Niveau::where('id', $niveau)->first();
        $fillier = Filliere::where('id', $fillier)->first();

        $groupes = Groupe::where('Niveau_id', $niveau->id)
        ->where('filliere_id', $fillier->id)
        ->get();
        
        return $groupes;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Groupe  $groupe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Groupe $groupe)
    {
        $groupe->delete();

        return response()->json([
            'message' => 'Groupe removed successfully ',
        ]);
    }
}
