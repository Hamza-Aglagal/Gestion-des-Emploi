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
        Schema::create('seance_temporaires', function (Blueprint $table) {
            $table->id();
            $table->json('groupe_ids');
            $table->string('jour');
            $table->unsignedBigInteger('salle_id');
            $table->unsignedBigInteger('professeur_id');
            $table->unsignedBigInteger('date_id');

            $table->foreign('salle_id')->references('id')->on('salles')->onDelete('cascade');
            $table->foreign('date_id')->references('id')->on('date_heurs')->onDelete('cascade');
            $table->foreign('professeur_id')->references('id')->on('professeurs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seance_temporaires');
    }
};
