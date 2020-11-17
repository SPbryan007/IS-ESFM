<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTrigger extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared("
        CREATE TRIGGER NI_INGRESO_TRIGGER BEFORE INSERT ON `ingreso` FOR EACH ROW
            BEGIN
                DECLARE IA INT;
                SET IA = (SELECT COUNT(*)+1 FROM ingreso WHERE periodo_id = NEW.periodo_id AND deleted_at IS NULL );
                IF(IA<10)THEN
                    IF NOT EXISTS( SELECT 1 FROM ingreso WHERE nro_ingreso = CONCAT('00',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL) THEN
                        SET NEW.nro_ingreso = CONCAT('00',IA);
                    ELSE
                        SET IA = IA+1;
                        SET NEW.nro_ingreso = CONCAT('00',IA);
                    END IF;
                    ELSE IF(IA<100) THEN
                           IF NOT EXISTS( SELECT 1 FROM ingreso WHERE nro_ingreso = CONCAT('0',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL)THEN
                                SET NEW.nro_ingreso = CONCAT('0',IA);
                           ELSE
                                SET IA = IA+1;
                                SET NEW.nro_ingreso = CONCAT('0',IA);
                            END IF;
                        ELSE IF(IA<1000)THEN
                                IF NOT EXISTS(SELECT 1 FROM ingreso WHERE nro_ingreso = IA AND periodo_id = NEW.periodo_id AND deleted_at IS NULL ) THEN
                                SET NEW.nro_ingreso = IA;
                            ELSE
                                SET IA = IA+1;
                                SET NEW.nro_ingreso = IA;
                             END IF;
                        END IF;
                    END IF;
                END IF;
            END
        ");

        DB::unprepared("
        CREATE TRIGGER NS_SALIDA_TRIGGER BEFORE INSERT ON `salida` FOR EACH ROW
            BEGIN
                DECLARE IA INT;
                SET IA = (SELECT COUNT(*)+1 FROM salida WHERE periodo_id = NEW.periodo_id AND deleted_at IS NULL );
                IF(IA<10)THEN
                    IF NOT EXISTS( SELECT 1 FROM salida WHERE nro_salida = CONCAT('00',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL) THEN
                        SET NEW.nro_salida = CONCAT('00',IA);
                    ELSE
                        SET IA = IA+1;
                        SET NEW.nro_salida = CONCAT('00',IA);
                    END IF;
                    ELSE IF(IA<100) THEN
                           IF NOT EXISTS( SELECT 1 FROM salida WHERE nro_salida = CONCAT('0',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL)THEN
                                SET NEW.nro_salida = CONCAT('0',IA);
                           ELSE
                                SET IA = IA+1;
                                SET NEW.nro_salida = CONCAT('0',IA);
                            END IF;
                        ELSE IF(IA<1000)THEN
                                IF NOT EXISTS(SELECT 1 FROM salida WHERE nro_salida = IA AND periodo_id = NEW.periodo_id AND deleted_at IS NULL ) THEN
                                SET NEW.nro_salida = IA;
                            ELSE
                                SET IA = IA+1;
                                SET NEW.nro_salida = IA;
                             END IF;
                        END IF;
                    END IF;
                END IF;
            END
        ");

        DB::unprepared("
        CREATE TRIGGER GENCODE_ARTICULO_BA_TRIGGER BEFORE UPDATE ON `articulo` FOR EACH ROW
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
            END
        ");

        DB::unprepared("
        CREATE TRIGGER GENCODE_ARTICULO_BI_TRIGGER BEFORE INSERT ON `articulo` FOR EACH ROW
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
            END
        ");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `NI_INGRESO_TRIGGER`');
        DB::unprepared('DROP TRIGGER `GENCODE_ARTICULO_BI_TRIGGER`');
        DB::unprepared('DROP TRIGGER `GENCODE_ARTICULO_BA_TRIGGER`');

    }
}