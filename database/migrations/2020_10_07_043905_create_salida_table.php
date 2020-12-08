<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalidaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salida', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nro_salida',5)->nullable(false);
            $table->string('nro_pedido',5)->nullable(false);
            $table->text('finalidad')->nullable(true);
            $table->text('observacion')->nullable(true);
            $table->date('fecha_pedido')->nullable(true);
            $table->unsignedBigInteger('solicitante_id')->nullable(false);
            $table->foreign('solicitante_id')->references('id')
                ->on('solicitante')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('usuario_id')->nullable(false);
            $table->foreign('usuario_id')->references('id_usuario')
                ->on('usuario')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('autorizador_id')->nullable(false);
            $table->foreign('autorizador_id')->references('id')
                ->on('funcionario')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('verificador_id')->nullable(false);
            $table->foreign('verificador_id')->references('id')
                ->on('funcionario')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->unsignedBigInteger('periodo_id')->nullable(false);
            $table->foreign('periodo_id')->references('id')
                ->on('periodo')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('detalle_salida',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->double('cantidad')->nullable(false);
            $table->text('descripcion')->nullable(true);
            $table->unsignedBigInteger('lote_id')->nullable(false);
            $table->foreign('lote_id')->references('id')
                ->on('lote')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->unsignedBigInteger('salida_id')->nullable(false);
            $table->foreign('salida_id')->references('id')
                ->on('salida')
                ->onUpdate('restrict')
                ->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('devolucion', function (Blueprint $table){
            $table->unsignedBigInteger('id_devolucion')->primary();
            $table->string('motivo',255)->nullable(true);
            $table->text('observacion')->nullable(true);
            $table->foreign('id_devolucion')->references('id')
                ->on('ingreso')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->unsignedBigInteger('id_salida')->nullable(false);
            $table->foreign('id_salida')->references('id')
                ->on('salida')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->unsignedBigInteger('usuario_id')->nullable(false);
            $table->foreign('usuario_id')->references('id_usuario')
                ->on('usuario')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salida');
        Schema::dropIfExists('detalle_salida');
        Schema::dropIfExists('devolucion');
    }
}
/*DELIMITER $$
CREATE TRIGGER GENCODE_BI_ARTICULO BEFORE INSERT ON articulo
	FOR EACH ROW
        BEGIN
    DECLARE CA INT;
    SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
    SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);

    IF(CA<10)THEN
    	SET NEW.codigo = CONCAT(@CP,'00',CA);
    ELSE IF(CA<100) THEN
    	SET NEW.codigo = CONCAT(@CP,'0',CA);
        ELSE IF(CA<1000)THEN
        	SET NEW.codigo = CONCAT(@CP,CA);
            END IF;
        END IF;
    END IF;
END$$*/
/*DELIMITER $$

CREATE TRIGGER GENCODE_BA_ARTICULO BEFORE UPDATE ON articulo
	FOR EACH ROW
        BEGIN
    DECLARE CA INT;
    SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
    SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);
    IF(NEW.partida_id <> OLD.partida_id)THEN
        IF(CA<10)THEN
    	    SET NEW.codigo = CONCAT(@CP,'00',CA);
        ELSE IF(CA<100) THEN
    	    SET NEW.codigo = CONCAT(@CP,'0',CA);
            ELSE IF(CA<1000)THEN
        	    SET NEW.codigo = CONCAT(@CP,CA);
                END IF;
            END IF;
        END IF;
    END IF;
END$$*/


/*DELIMITER $$
CREATE TRIGGER GENCODE_BI_ARTICULO BEFORE INSERT ON articulo
	FOR EACH ROW
        BEGIN
    DECLARE CA INT;
    SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
    SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);
    IF(CA<10)THEN
        IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'00',CA)) THEN
    	    SET NEW.codigo = CONCAT(@CP,'00',CA);
        ELSE
            SET CA = CA+1;
            SET NEW.codigo = CONCAT(@CP,'00',CA);
        ELSE IF(CA<100) THEN
               IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'0',CA)) THEN
    	            SET NEW.codigo = CONCAT(@CP,'0',CA);
               ELSE
                    SET CA = CA+1;
                    SET NEW.codigo = CONCAT(@CP,'0',CA);
            ELSE IF(CA<1000)THEN
                    IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,CA)) THEN
    	            SET NEW.codigo = CONCAT(@CP,CA);
                ELSE
                    SET CA = CA+1;
                    SET NEW.codigo = CONCAT(@CP,CA);
            END IF;
        END IF;
    END IF;
END$$*/
/*DELIMITER $$




/*DELIMITER $$

CREATE TRIGGER GENCODE_BA_ARTICULO BEFORE UPDATE ON articulo
	FOR EACH ROW
        BEGIN
    DECLARE CA INT;
    SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
    SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);
    IF(NEW.partida_id <> OLD.partida_id)THEN
        IF(CA<10)THEN
            IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'00',CA)) THEN
    	        SET NEW.codigo = CONCAT(@CP,'00',CA);
            ELSE
                SET CA = CA+1;
                SET NEW.codigo = CONCAT(@CP,'00',CA);
            END IF;
            ELSE IF(CA<100) THEN
                    IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'0',CA)) THEN
    	                SET NEW.codigo = CONCAT(@CP,'0',CA);
                    ELSE
                        SET CA = CA+1;
                        SET NEW.codigo = CONCAT(@CP,'0',CA);
                    END IF;
                    ELSE IF(CA<1000)THEN
                        IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,CA)) THEN
    	                    SET NEW.codigo = CONCAT(@CP,CA);
                        ELSE
                            SET CA = CA+1;
                            SET NEW.codigo = CONCAT(@CP,CA);
                        END IF;
                    END IF;
                END IF;
            END IF;
    END IF;
END$$*/
