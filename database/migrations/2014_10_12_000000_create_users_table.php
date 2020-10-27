<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
  /*      Schema::create('roles',function(Blueprint $table){
            $table->increments('id');
            $table->string('name')->comment('Nombre del role de usuario');
            $table->text('description');
            $table->timestamps();
        });*/

        Schema::create('funcionario', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',50);
            $table->string('apellido',100);
            $table->string('documento',15)->unique();
            $table->string('telefono',15)->nullable(true);
            $table->string('direccion',150)->nullable(true);
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('unidad', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',100)->unique();
            $table->unsignedBigInteger('funcionario_id')->nullable(false);
            $table->foreign('funcionario_id')->references('id')
                ->on('funcionario')
                ->onUpdate('cascade')
                ->onDelete('restrict');

            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('usuario', function (Blueprint $table) {
            $table->unsignedBigInteger('id_usuario')->primary();
            $table->string('username',30)->unique();
            $table->string('password',100);
            $table->enum('rol',[\App\Role::ADMIN,\App\Role::DEFAULT])->nullable(false);
            $table->rememberToken();
            $table->foreign('id_usuario')->references('id')
                ->on('funcionario')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('solicitante', function (Blueprint $table) {
            $table->unsignedBigInteger('id_solicitante')->primary();
            $table->string('cargo',100);
            $table->foreign('id_solicitante')->references('id')
                ->on('funcionario')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->unsignedBigInteger('unidad_id')->nullable(false);
            $table->foreign('unidad_id')->references('id')
                ->on('unidad')
                ->onDelete('cascade')
                ->onUpdate('cascade');
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
        Schema::dropIfExists('funcionario');
        Schema::dropIfExists('unidad');
        Schema::dropIfExists('usuario');
        Schema::dropIfExists('solicitante');

       /* Schema::dropIfExists('roles');*/
    }
}
