<?php

namespace App\Http\Controllers;

use App\Models\Filliere;
use Illuminate\Http\Request;

class FilliereController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filliere = Filliere::all();
        return $filliere ;
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
        ]);
    
        $filliere = Filliere::create([
            'nom' => $request->nom,
        ]);
    
        return "created successfully.." ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */

    public function Allgroupes(int $id)
    {

        $groupes = Filliere::find($id)->groupes;

        return $groupes;
    }

     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */

     public function Allmodel(int $id)
     {
 
         $models = Filliere::find($id)->models;
 
         return $models;
     }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function show(Filliere $filliere)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function edit(Filliere $filliere)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Filliere $filliere)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function destroy(Filliere $filliere)
    {
        //
    }
}
