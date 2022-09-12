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
        Schema::create('menus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('shortname');
            $table->string('template');
            $table->string('media')->default('print');
            $table->integer('width')->default(216);
            $table->integer('height')->default(279);
            $table->string('paper')->default('Letter');
            $table->string('orientation')->default('Portrait');
            $table->string('size')->default('short');
            $table->foreignId('branch_id')->constrained('branches')->onDelete('cascade');
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
        Schema::dropIfExists('menus');
    }
};
