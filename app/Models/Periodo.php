<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Periodo extends Model
{
    const EN_CURSO = 'EN CURSO';
    const FINALIZADO = 'FINALIZADO';

    use SoftDeletes;
    protected $table = 'periodo';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'nombre','fecha_inicio','fecha_fin','estado'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ingresos()
    {
        return $this->hasMany('App\Models\Ingreso','periodo_id','id');
    }
    

}
