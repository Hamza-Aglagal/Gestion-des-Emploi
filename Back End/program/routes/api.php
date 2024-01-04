<?php

use App\Http\Controllers\SeanceTemporaireController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EncadreController;
use App\Http\Controllers\NiveauController;
use App\Http\Controllers\ModeleController;
use App\Http\Controllers\DateHeurController;
use App\Http\Controllers\SeanceController;
use App\Http\Controllers\GroupeController;
use App\Http\Controllers\ProfesseurController;
use App\Http\Controllers\FilliereController;
use App\Http\Controllers\SalleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



// Student 
Route::resource('student', StudentController::class);
    

// Admin 
Route::resource('admin', AdminController::class);
    

// api CRUD Salles 
Route::resource('salles', SalleController::class);

// api CRUD DateHeure 
Route::resource('DateHeure', DateHeurController::class);
Route::get('/date-heure/allDates-premier',[DateHeurController::class, 'AllDatesPremierWithDay']);
Route::get('/date-heure/allDate-secondaire',[DateHeurController::class, 'AllDatesSecondaire']);
Route::get('/date-heure/One-Date-secondaire/{IdDate}',[DateHeurController::class, 'OneDatesSecondaire']);
Route::get('/date-heure/Check-dateValide/{jour}/{idDate}/{idprof}/{idGrp} ',[DateHeurController::class, 'CheckDateValide']);


// api CRUD Fillier 
Route::resource('filliere', FilliereController::class);
Route::get('/fillieres/{filiere_id}/groupes',[FilliereController::class, 'Allgroupes']);
Route::get('/fillieres/{filiere_id}/model',[FilliereController::class, 'Allmodel']);


// api CRUD Modules 
Route::resource('module', ModeleController::class);
Route::get('modules/niveau/{niveau}/fillier/{fillier}',[ModeleController::class, 'AllModulesWithNivFillier']);
Route::get('/modules/prof/{idProf}',[ModeleController::class, 'AllModulesOfProf']);

// api CRUD Professeur
Route::resource('professeur', ProfesseurController::class);

// api CRUD Groupe
Route::resource('groupe', GroupeController::class);
Route::get('groupes/groupe-active',[GroupeController::class, 'AllgroupeActive']);
Route::get('groupes/niveau/{niveau}/{fillier}/groupes',[GroupeController::class, 'AllGroupeWithNivFillier']);


// api CRUD Seance
Route::resource('seance', SeanceController::class);
Route::get('seances/professeur/{id}',[SeanceController::class, 'GetAllSeanceOfProf']);
Route::get('seances/delete/{id}', [SeanceController::class, 'DeleteSeance']);
Route::get('seances/dates-diponible/{id}/{jour}/{groupeId}',[SeanceController::class, 'GetAllDateDisponibleInDayOfProfandGroupe']);
Route::get('seances/salle-disponible/{jour}/{idDate}',[SeanceController::class, 'AllSalleDisponibleInDate']);
Route::get('time/available/{professeurId}/{groupeId}',[SeanceController::class, 'TimeDisponibleOfAddSeance']);
Route::get('emploi/professeur/{id}', [SeanceController::class, 'deleteEmploiOfProf']);
Route::post('/dates-salle-disponible/prof-groupe', [SeanceController::class, 'DatesSalleAvailableOfProfAndGroupe']);
Route::post('emploi/list-groupe', [SeanceController::class, 'AllEmploiOfListGroupe']);


// api CRUD niveau
Route::resource('niveau', NiveauController::class);


// Api Encadrement
Route::resource('Encadrer', EncadreController::class);
Route::get('prof/encadre/{id}',[EncadreController::class, 'GetGrpEncadreParProf']);



// Login User 
Route::post('login',[AuthController::class, 'login']);




// Seance Temporaire 
// Route::resource('seanceTemporaire', SeanceTemporaireController::class);

Route::post('seanceTemporaire',[SeanceTemporaireController::class, 'AddSeanceTemporaire']);








// Face ID 
// Route::post('/face-recognition', 'FaceRecognitionController@recognize');
