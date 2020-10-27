<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gestion extends Model
{
    const EN_CURSO = 'EN CURSO';
    const FINALIZADO = 'FINALIZADO';

    use SoftDeletes;
    protected $table = 'periodo';
    protected $primaryKey = 'idGestion';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'nombre','fecha_inicio','fecha_fin','estado','descripcion'
    ];
}
