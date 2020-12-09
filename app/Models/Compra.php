<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    const FACTURA = 'FACTURA';
    const RECIBO = 'RECIBO';

    const ORDER_COMPRA = 'COM';
    const ORDER_SERVICIO = 'SER';
    const CONTRATO = 'CON';

    protected $table = 'compra';
    protected $primaryKey = 'id_compra';
    public $timestamps = false;
   /* protected $fillable = [
        'nro_comprobante','proveedor','tipo_comprobante','tipo_compra'
    ];*/
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ingreso()
    {
        return $this->belongsTo('App\Models\Ingreso','id_compra','id');
    }
}
