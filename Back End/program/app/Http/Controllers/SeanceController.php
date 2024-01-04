<?php

namespace App\Http\Controllers;

use App\Models\Groupe;
use App\Models\Salle;
use App\Models\Professeur;
use App\Models\DateHeur;
use App\Models\Seance;
use Illuminate\Http\Request;

class SeanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Seances = Seance::all();
        return $Seances ;
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
        'salle_id' => 'required|exists:salles,id',
        'date_id' => 'required|exists:date_heurs,id',
        'groupe_id' => 'required|exists:groupes,id',
        'professeur_id' => 'required|exists:professeurs,id',
        'module_id' => 'required|exists:modeles,id',
        'jour' => 'required',
    ]);

    $existingSeance = Seance::where('professeur_id', $request->professeur_id)
        ->where('groupe_id', $request->groupe_id)
        ->where('date_id', $request->date_id)
        ->where('module_id', $request->module_id)
        ->where('jour', $request->jour)
        ->first();

    if ($existingSeance) {
        return response()->json(['error' => 'Senace déja existe'], 200);
    }

    Seance::create([
        'module_id' => $request->module_id,
        'professeur_id' => $request->professeur_id,
        'groupe_id' => $request->groupe_id,
        'date_id' => $request->date_id,
        'salle_id' => $request->salle_id,
        'jour' => $request->jour, 
    ]);

    // Return success response or redirect as needed
    return response()->json(['success' => 'Séance créée avec succès']);
}
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function GetAllSeanceOfProf(int $id)
    {

        $seancesProfesseur = Seance::where('professeur_id', $id)
            ->with('dateHeurs')
            ->with('salle')
            ->with(['groupes' => function ($query) {
                $query->with('filliere', 'niveau');
            }])
            ->with('module')
            ->get();
    
        
        $AllSeanceByDays = [];

        $jours = ['Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi'];

        foreach ($jours as $jour) {
            $seanceDay = [];

            foreach ($seancesProfesseur as $seance) {
                if($seance->jour == $jour){
                    $seanceDay[] = $seance;
                }
            }
    
            $AllSeanceByDays[$jour] = $seanceDay;
        }
    

    
        return $AllSeanceByDays;
    }

     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function GetAllDateDisponibleInDayOfProfandGroupe(int $professeurId, string $jour, int $groupeId)
    {     

        $occupiedDateIds = Seance::where('jour', $jour)
        ->where(function ($query) use ($professeurId, $groupeId) {
            $query->where('professeur_id', $professeurId)
                ->orWhere('groupe_id', $groupeId);
        })
        ->pluck('date_id')
        ->toArray();

        // $AllDates = DateHeur::all();

        $allDatesDisponible = DateHeur::whereNotIn('id', $occupiedDateIds)->get();

        return $allDatesDisponible;
    }

   /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function AllSalleDisponibleInDate( string $jour, int $idDate)
    {     
        $seances = Seance::where('jour', $jour)
        ->where('date_id', $idDate)
        ->get();

        $occupiedSalleIds = $seances->pluck('salle_id')->toArray();

        $availableSalles = Salle::whereNotIn('id', $occupiedSalleIds)
        ->orderBy('adresse')
        ->get();

        return $availableSalles;
       
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function TimeDisponibleOfAddSeance(int $professeurId, int $groupeId)
    {
        $seancesProfesseur = Seance::where('professeur_id', $professeurId)->get();
        $seancesGroupe = Seance::where('groupe_id', $groupeId)->get();

        $availableDatesByDay = [];

        $jours = ['Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi'];

        foreach ($jours as $jour) {
            $availableDates = [];

            $filteredSeancesProfesseur = $seancesProfesseur->where('jour', $jour);
            $filteredSeancesGroupe = $seancesGroupe->where('jour', $jour);

            // Get all occupied date_ids for both seances
            $occupiedDateIds = array_merge(
                $filteredSeancesProfesseur->pluck('date_id')->toArray(),
                $filteredSeancesGroupe->pluck('date_id')->toArray()
            );

            // Get all date_heurs available for the current day
            $dateHeurs = DateHeur::whereNotIn('id', $occupiedDateIds)->get();

            foreach ($dateHeurs as $dateHeur) {
                $availableDates[] = [
                    'date_id' => $dateHeur->id,
                    'heur_debut' => $dateHeur->heur_debut,
                    'heur_fin' => $dateHeur->heur_fin,
                ];
            }

            $availableDatesByDay[$jour] = $availableDates;
        }

        // Get All dates 
        $AllDate = DateHeur::all();


        return ['AvailableDates' => $availableDatesByDay , 'allDates' => $AllDate  ];

        // return [ $availableDatesByDay];  
    }

    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function DatesSalleAvailableOfProfAndGroupe(Request $request)
    {
        $idProf = $request->idProf;
        $groupesId = $request->GroupesId;
    
        $availableDatesAndSalleByDay = [];
    
        $occupiedDateIdOfALL = [];
    
        $jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    
        foreach ($jours as $jour) {

            $occupiedDateIdOfDay = [];
    
            $seancesProfesseurofDay = Seance::where('professeur_id', $idProf)
                ->where('jour', $jour)
                ->pluck('date_id');
    
            $occupiedDateIdOfDay = array_merge($occupiedDateIdOfDay, $seancesProfesseurofDay->toArray());
    
            foreach ($groupesId as $idGroupe) {

                $seancesGroupeofDay = Seance::where('groupe_id', $idGroupe)
                    ->where('jour', $jour)
                    ->pluck('date_id');
    
                $occupiedDateIdOfDay = array_merge($occupiedDateIdOfDay, $seancesGroupeofDay->toArray());
            }

            $occupiedDateOfDay = DateHeur::whereIn('id', $occupiedDateIdOfDay)->get();
            $idPremier = [];
            foreach ($occupiedDateOfDay as $date) {
                if ($date->type == 'Secondaire') {
                    $idPremier = array_merge($idPremier, [$date->type_Stp]);
                }
            }
            $occupiedDateIdOfDay = array_merge($occupiedDateIdOfDay, $idPremier);
    
            $availableDatesOfALL = DateHeur::whereNotIn('id', $occupiedDateIdOfDay)
            ->whereNotIn('type_Stp', $occupiedDateIdOfDay)
            ->get();


    
            foreach ($availableDatesOfALL as $date) {
                // Fetch occupied salle ids for the day and date
                $occupiedSalleIds = Seance::where('jour', $jour)
                    ->where('date_id', $date->id)
                    ->pluck('salle_id');
    
                // Fetch available salles for the day and date
                $availableSalles = Salle::whereNotIn('id', $occupiedSalleIds)->orderBy('adresse')->get();
    
                if ($availableSalles->isNotEmpty()) {
                    $availableDatesAndSalleByDay[$jour][$date->id] = [
                        'date' => $date,
                        'Salles' => $availableSalles,
                    ];
                }
            }
        }
    
        return $availableDatesAndSalleByDay;
    }
    
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function AllEmploiOfListGroupe(Request $request)
    {
        
        $jours = ['Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi'];

        $groupesId = $request->groupesId;

        $emplois = [];
        foreach ($groupesId as $groupeId) {

            $groupe = Groupe::findOrFail($groupeId);
            $seances = Seance::where('groupe_id', $groupeId)
                ->with('dateHeurs')
                ->with('salle')
                ->get();

            $emploi = [];  
            foreach ($jours as $jour) {
                $seanceDay = [];
                foreach ($seances as $seance) {
                    if($seance->jour == $jour){
                        $seanceDay[] = $seance;
                    }
                }
        
                $emploi[$jour] = $seanceDay;
            }

            $emplois[$groupe->id] = $emploi;

        }

        return $emplois;
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function edit(Seance $seance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Seance $seance)
    {
        //
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */

     public function deleteEmploiOfProf(int $id)
    {
        // Find all seances associated with the given professor ID
        $seancesToDelete = Seance::where('professeur_id', $id)->get();

        // Delete each seance
        foreach ($seancesToDelete as $seance) {
            $seance->delete();
        }

        // Alternatively, you can use the delete method directly on the query to delete all matching records
        // Seance::where('professeur_id', $professeurId)->delete();

        return response()->json(['message' => 'Toutes les séances supprimées avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Seance  $seance
     * @return \Illuminate\Http\Response
     */
    public function DeleteSeance(int $id)
    {
        $seance = Seance::find($id);

        if ($seance) {
            $seance->delete();

            return response()->json([
                'success' => 'Séance supprimée avec succès',
            ], 200);

        } else {
            return response()->json([
                'error' => 'Seance not found',
            ], 200);
        }


    }
}


