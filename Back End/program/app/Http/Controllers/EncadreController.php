<?php

namespace App\Http\Controllers;

use App\Models\Encadre;
use Illuminate\Http\Request;

class EncadreController extends Controller
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
    public function store(Request $request)
    {
        $request->validate([
            'groupe_id' => 'required|exists:groupes,id',
            'professeur_id' => 'required|exists:professeurs,id',
            'type' => 'required',
        ]);

         // verifier si Encadrement exist
         $existingEncadre = Encadre::where('groupe_id', $request->groupe_id)
         ->where('professeur_id', $request->groupe_id)
         ->first();
         if ($existingEncadre) {
            return "Encadrement existe déja !";
         }

    
        $groupe = Encadre::create([
            'groupe_id' => $request->groupe_id,
            'professeur_id' => $request->professeur_id,
            'type' => $request->type,
        ]);
    
        return "L’encadrement Ajouté avec succès.." ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Encadre  $encadre
     * @return \Illuminate\Http\Response
     */
    public function show(Encadre $encadre)
    {
        //
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Encadre  $encadre
     * @return \Illuminate\Http\Response
     */
    public function GetGrpEncadreParProf(int $id)
    {
        $encadres = Encadre::where('professeur_id', $id)->get();
    
        if ($encadres->count() > 0) {
            $encadres->load(['groupe' => function ($query) {
                $query->with('filliere', 'niveau');
            }]);
            
            $groupeIds = $encadres->pluck('groupe.id')->unique()->toArray();
            
            return [
                'encadres' => $encadres,
                'groupe_ids' => $groupeIds,
            ];
        } else {
            return null;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Encadre  $encadre
     * @return \Illuminate\Http\Response
     */
    public function edit(Encadre $encadre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Encadre  $encadre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Encadre $encadre)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Encadre  $encadre
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        // Assuming you have a model named "YourModel"
        $Encadre = Encadre::find($id);
    
        if (!$Encadre) {
            return response()->json(['message' => 'Encadre not found']);
        }
    
        $Encadre->delete();
    
        return response()->json(['message' => "Encadre supprimé avec succès"]);
    }


}
