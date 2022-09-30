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
            $table->string('title')->nullable();
            $table->string('title2')->nullable();
            $table->string('subitle')->nullable();
            $table->string('subtitle2')->nullable();
            $table->integer('menu_price')->nullable();
            $table->string('footer_local')->nullable();
            $table->string('footer_notice')->nullable();
            $table->string('footer_notice2')->nullable();
            $table->string('watermark')->nullable();
            $table->tinyInteger('base_template')->default(0);
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('menu_type_id')->constrained('menu_types')->onDelete('cascade');
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
