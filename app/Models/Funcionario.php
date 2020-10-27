<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Funcionario extends Model
{
    use SoftDeletes;

    protected $table = 'funcionario';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'documento','nombre','apellido','direccion','telefono',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne('App\Models\User','id_usuario','id');
        //(model al que referenciar usuario, fk del usuario, llave primaria de funcionario)
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function solicitante(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne('App\Models\Solicitante','id_solicitante','id');
            //->withoutTrashed();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function unidad()
    {
        return $this->hasMany('App\Models\Unidad','funcionario_id','id');
    }

    public function SalidasAutorizador()
    {
        return $this->hasMany('App\Models\Salida','autorizador_id','id');
    }

    public function SalidasVerificador()
    {
        return $this->hasMany('App\Models\Salida','verificador_id','id');
    }

}
