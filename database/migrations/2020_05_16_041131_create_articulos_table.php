<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partida', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',155);
            $table->string('codigo',6)->unique();
            $table->string('descripcion',255)->nullable(true);
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('unidad_medida', function (Blueprint $table) {
            $table->id();
            $table->string('sigla',6);
            $table->string('nombre',100);
            $table->text('descripcion')->nullable(true);
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('articulo', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',155);
            $table->string('codigo',8)->unique();
            $table->enum('linea',[App\Models\Articulo::LINEA_1,App\Models\Articulo::LINEA_2,App\Models\Articulo::LINEA_3]);
            /*$table->double('stock',8,2);*/
            $table->unsignedBigInteger('partida_id');
            $table->foreign('partida_id')->references('id')
                ->on('partida')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->unsignedBigInteger('unidad_medida_id');
            $table->foreign('unidad_medida_id')->references('id')
                ->on('unidad_medida')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('lote',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->double('stock')->nullable(false);
            $table->double('saldo')->nullable(false);
            $table->unsignedBigInteger('articulo_id');
            $table->foreign('articulo_id')->references('id')
                ->on('articulo')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partida');
        Schema::dropIfExists('unidad_medida');
        Schema::dropIfExists('articulo');
        Schema::dropIfExists('lote');
    }
}
