<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Solicitante extends Model
{
    use SoftDeletes;

    protected $table = 'solicitante';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'cargo','unidad_id','funcionario_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function funcionario(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
//        return $this->belongsTo('App\Models\Funcionario','id_solicitante','id');
        return $this->belongsTo('App\Models\Funcionario','funcionario_id','id');
            //->withoutTrashed();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function unidad()
    {
        return $this->belongsTo('App\Models\Unidad','unidad_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function salidas()
    {
       // return $this->hasMany('App\Models\Salida','solicitante_id','id_solicitante');
        return $this->hasMany('App\Models\Salida','solicitante_id','id');
    }
}


