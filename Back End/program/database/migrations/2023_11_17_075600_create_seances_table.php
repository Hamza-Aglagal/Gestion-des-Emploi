<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seances', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('salle_id');
            $table->unsignedBigInteger('date_id');
            $table->unsignedBigInteger('groupe_id');
            $table->unsignedBigInteger('professeur_id');
            $table->unsignedBigInteger('module_id');
            $table->string('jour');

            
            $table->foreign('salle_id')->references('id')->on('salles')->onDelete('cascade');
            $table->foreign('date_id')->references('id')->on('date_heurs')->onDelete('cascade');
            $table->foreign('groupe_id')->references('id')->on('groupes')->onDelete('cascade');
            $table->foreign('professeur_id')->references('id')->on('professeurs')->onDelete('cascade');
            $table->foreign('module_id')->references('id')->on('modeles')->onDelete('cascade');
            $table->timestamps();

            // $table->unsignedBigInteger('modele_id')->nullable();
            // $table->foreign('modele_id')->references('id')->on('modeles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seances');
    }
};
