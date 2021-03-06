<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Salida extends Model
{
    use SoftDeletes;
    protected $table = 'salida';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'nro_salida','usuario_id','solicitante_id','autorizador_id','verificador_id','periodo_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function solicitante()
    {
        //return $this->belongsTo('App\Models\Solicitante','solicitante_id','id_solicitante');
        return $this->belongsTo('App\Models\Solicitante','solicitante_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usuario()
    {
        return $this->belongsTo('App\Models\User','usuario_id','id_usuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function autorizador()
    {
        return $this->belongsTo('App\Models\Funcionario','autorizador_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function verificador()
    {
        return $this->belongsTo('App\Models\Funcionario','verificador_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detallesalidas()
    {
        return $this->hasMany('App\Models\DetalleSalida','salida_id','id');
    }

}
