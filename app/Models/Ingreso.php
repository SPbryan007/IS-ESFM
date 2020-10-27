<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ingreso extends Model
{
    const DONACION = 'Donacion';
    const COMPRA = 'Compra';
    const DEVOLUCION = 'Devolucion';
    const INV_INICIAL = 'INV_INICIAL';

    use SoftDeletes;
    protected $table = 'ingreso';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'tipo_ingreso','nro_ingreso','usuario_id','proveedor_id','periodo_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function compra()
    {
        return $this->hasOne('App\Models\Compra','id_compra','id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usuario()
    {
        return $this->belongsTo('App\Models\User', 'usuario_id', 'id_usuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function proveedor()
    {
        return $this->belongsTo('App\Models\Proveedor','proveedor_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function periodo()
    {
        return $this->belongsTo('App\Models\Periodo','periodo_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detalleingresos()
    {
        return $this->hasMany('App\Models\DetalleIngreso','ingreso_id','id');
    }

}
