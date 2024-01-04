<?php

namespace App\Http\Controllers;

use App\Models\SeanceTemporaire;
use Illuminate\Http\Request;

class SeanceTemporaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function AddSeanceTemporaire(Request $request)
    {
        $request->validate([
            'salle_id' => 'required|exists:salles,id',
            'date_id' => 'required|exists:date_heurs,id',
            'professeur_id' => 'required|exists:professeurs,id',
            'groupe_ids' => 'required',
            'jour' => 'required',
        ]);
    
        $existingSeance = SeanceTemporaire::where('professeur_id', $request->professeur_id)
            ->where('salle_id', $request->salle_id)
            ->where('date_id', $request->date_id)
            ->where('jour', $request->jour)
            ->first();
    
        if ($existingSeance) {
            return response()->json(['error' => 'Seance deja existe'], 200);
        }
    
        SeanceTemporaire::create([
            'professeur_id' => $request->professeur_id,
            'groupe_ids' => json_encode($request->groupe_ids), 
            'date_id' => $request->date_id,
            'salle_id' => $request->salle_id,
            'jour' => $request->jour,
        ]);
    
        return response()->json(['success' => 'Seance reserve avec succes']);
    }
    



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SeanceTemporaire  $seanceTemporaire
     * @return \Illuminate\Http\Response
     */
    public function show(SeanceTemporaire $seanceTemporaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SeanceTemporaire  $seanceTemporaire
     * @return \Illuminate\Http\Response
     */
    public function edit(SeanceTemporaire $seanceTemporaire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SeanceTemporaire  $seanceTemporaire
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SeanceTemporaire $seanceTemporaire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SeanceTemporaire  $seanceTemporaire
     * @return \Illuminate\Http\Response
     */
    public function destroy(SeanceTemporaire $seanceTemporaire)
    {
        //
    }
}
