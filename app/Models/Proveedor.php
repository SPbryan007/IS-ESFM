<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proveedor extends Model
{
    use SoftDeletes;

    protected $table = 'proveedor';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];


    protected $fillable = [
        'nit','nombre','direccion','telefono','rubro','responsable',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ingresos()
    {
        return $this->hasMany('App\Models\Ingreso','proveedor_id','id');
    }

}
