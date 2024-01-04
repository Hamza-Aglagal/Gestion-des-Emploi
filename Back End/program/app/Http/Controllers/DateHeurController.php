<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\DateHeur;
use Illuminate\Http\Request;

class DateHeurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Dates = DateHeur::all();
        
        return $Dates;
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
        // Validation 
        $request->validate([
            'heur_debut' => 'required|before:heur_fin',
            'heur_fin' => 'required',
            'type' => ['required', 'in:Secondaire,premier'],
            'type_Stp' => 'required',
        ]);

        // verifier si la date est disponible
        $existingDate = DateHeur::where('heur_debut', $request->heur_debut)
        ->where('heur_fin', $request->heur_fin)
        ->first();

        if ($existingDate) {
        return "Date is not available. Please choose another time slot.";
        }

        // creation Date 
        $Date = DateHeur::create([
            'heur_debut' => $request->heur_debut,
            'heur_fin' => $request->heur_fin,
            'type' => $request->type,
            'type_Stp' => $request->type_Stp,
        ]);
    
        return "Date created successfully.." ;

    }



    public function AllDatesPremierWithDay()
    {

        $AllDates =  DateHeur::where('type','premier')->get();

        $jours = ['Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi'];

        $availableDatesByDay = [];

        foreach ($jours as $jour) {
            $availableDates = [];

            foreach ($AllDates as $dateHeur) {
                $availableDates[] = [
                    'date_id' => $dateHeur->id,
                    'heur_debut' => $dateHeur->heur_debut,
                    'heur_fin' => $dateHeur->heur_fin,
                ];
            }

            $availableDatesByDay[$jour] = $availableDates;
        }



        return  $availableDatesByDay  ;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function AllDatesSecondaire()
    {

        $AllDates =  DateHeur::where('type','Secondaire')->get();


        return  $AllDates  ;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function OneDatesSecondaire(int $idDate)
    {

        $date =  DateHeur::where('id',$idDate)->first();

        $datesSecondaire = DateHeur::where('type', 'Secondaire')
        ->where(function ($query) use ($date) {
            $query->whereBetween('heur_debut', [$date->heur_debut, $date->heur_fin])
                ->orWhere('heur_fin', $date->heur_fin);
        })
        ->get();

        return $datesSecondaire;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function CheckDateValide($jour, $idDate, $idProf, $idGrp)
    {

    
        $datePass = DateHeur::where('id', $idDate)->first();

        
        $occupiedDatesProf = Seance::with('dateHeurs')
        ->where('jour', $jour)
        ->where('professeur_id', $idProf)
        ->get();

        foreach ($occupiedDatesProf as $occupationProf) {
            $occupiedDateProf = $occupationProf->dateHeurs;
            if (
                $datePass->id === $occupiedDateProf->id ||
                (
                    strtotime($datePass->heur_debut) >= strtotime($occupiedDateProf->heur_debut) &&
                    strtotime($datePass->heur_debut) <= strtotime($occupiedDateProf->heur_fin) ||
                    strtotime($datePass->heur_fin) >= strtotime($occupiedDateProf->heur_debut) &&
                    strtotime($datePass->heur_fin) <= strtotime($occupiedDateProf->heur_fin)
                )
            ) {
                return response()->json([
                    'error' => 'Professeur n’est pas disponible dans cette date .',
                ], 200);
            }
        }

        

        $occupiedDatesGroupe = Seance::with('dateHeurs')
        ->where('jour', $jour)
        ->where('groupe_id', $idGrp)
        ->get();

        foreach ($occupiedDatesGroupe as $occupationGroupe) {
            $occupiedDateGroupe = $occupationGroupe->dateHeurs;
            if (
                $datePass->id === $occupiedDateGroupe->id ||
                (
                    strtotime($datePass->heur_debut) >= strtotime($occupiedDateGroupe->heur_debut) &&
                    strtotime($datePass->heur_debut) <= strtotime($occupiedDateGroupe->heur_fin) ||
                    strtotime($datePass->heur_fin) >= strtotime($occupiedDateGroupe->heur_debut) &&
                    strtotime($datePass->heur_fin) <= strtotime($occupiedDateGroupe->heur_fin)
                )
            ) {
                return response()->json([
                    'error' => 'Groupe n’est pas disponible dans cette date.',
                ], 200);
            }
        }


        return response()->json([
            'message' => 'Date Valide',
        ], 200);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function show(DateHeur $dateHeur)
    {
        // return 'test';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function edit(DateHeur $dateHeur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DateHeur $dateHeur)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DateHeur  $dateHeur
     * @return \Illuminate\Http\Response
     */
    public function destroy(DateHeur $dateHeur)
    {
        //
    }
}
