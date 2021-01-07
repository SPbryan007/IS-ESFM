<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngresoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('periodo',function (Blueprint $table){
           $table->id();
           $table->string('nombre',100)->nullable(false);
           $table->date('fecha_inicio')->nullable(false);
           $table->date('fecha_fin')->nullable(false);
           $table->enum('estado',
            [
                App\Models\Periodo::EN_CURSO,
                App\Models\Periodo::FINALIZADO
            ]
           )->nullable(false);
           $table->text('descripcion')->nullable(true);
           $table->timestamps();
           $table->softDeletes();
        });

        Schema::create('ingreso', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('tipo_ingreso',
                [
                    App\Models\Ingreso::COMPRA,
                    App\Models\Ingreso::DEVOLUCION,
                    App\Models\Ingreso::DONACION,
                    App\Models\Ingreso::INV_INICIAL
                ]
            )->nullable(false);
//            $table->bigInteger('nro_ingreso')->nullable(false);
            $table->string('nro_ingreso',5)->nullable(false);
            $table->unsignedBigInteger('usuario_id')->nullable(false);
            $table->foreign('usuario_id')->references('id_usuario')
                ->on('usuario')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('proveedor_id')->nullable(true);
            $table->foreign('proveedor_id')->references('id')
                ->on('proveedor')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('periodo_id')->nullable(false);
            $table->foreign('periodo_id')->references('id')
                ->on('periodo')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->text('observacion')->nullable(true);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('detalle_ingreso',function(Blueprint $table){
             $table->bigIncrements('id');
             $table->double('cantidad')->nullable(false);
             $table->text('descripcion')->nullable(true);
             $table->unsignedBigInteger('lote_id')->nullable(false);
             $table->foreign('lote_id')->references('id')
                ->on('lote')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('ingreso_id')->nullable(false);
            $table->foreign('ingreso_id')->references('id')
                ->on('ingreso')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('compra', function (Blueprint $table) {
            $table->unsignedBigInteger('id_compra')->nullable(false);
            $table->enum('tipo_compra',[
                App\Models\Compra::ORDER_SERVICIO,
                App\Models\Compra::ORDER_COMPRA,
                App\Models\Compra::CONTRATO,
                App\Models\Compra::CAJA_CHICA,
            ])->nullable(false);
            $table->string('nro_solicitud',10)->nullable(true);
            $table->enum('tipo_comprobante',[
                    App\Models\Compra::FACTURA,
                    App\Models\Compra::RECIBO
                ])->nullable(false);
            $table->string('nro_comprobante')->nullable(false);
            $table->string('nro_autorizacion')->nullable(true);
            $table->date('fecha_comprobante')->nullable(true);
            $table->date('fecha_solicitud')->nullable(true);
            $table->foreign('id_compra')->references('id')
                ->on('ingreso')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });

        Schema::create('donacion', function (Blueprint $table){
            $table->unsignedBigInteger('id_donacion')->nullable(false);
            $table->enum('tipo_donacion',[
                App\Models\Donacion::ACTA_DONACION,
                App\Models\Donacion::DONACION_CONVENIO,
            ])->nullable(false);
            $table->string('nro_acta',15)->nullable(false);
            $table->date('fecha_acta')->nullable(true);
            $table->foreign('id_donacion')->references('id')
                ->on('ingreso')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('periodo');
        Schema::dropIfExists('ingreso');
        Schema::dropIfExists('detalle_ingreso');
        Schema::dropIfExists('compra');
        Schema::dropIfExists('donacion');
    }
}
