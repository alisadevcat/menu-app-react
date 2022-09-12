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
        Schema::create('menu_sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('id_parent_section')->default(0);
            $table->string('subtitle')->nullable();
            $table->string('title');
            $table->string('price')->nullable();
            $table->string('style')->default('No_Style');
            $table->string('side')->default('left');
            $table->string('field_order')->default('title,price,icons,subtitle,modifier,mod_text');
            $table->integer('ordering')->default(0);
            $table->foreignId('menu_type_id')->constrained('menu_types')->onDelete('cascade');
            $table->foreignId('menu_id')->constrained('menus')->onDelete('cascade');
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
        Schema::dropIfExists('menu_sections');
    }
};
