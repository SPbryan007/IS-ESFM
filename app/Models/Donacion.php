<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donacion extends Model
{

    protected $table = 'donacion';
    protected $primaryKey = 'id_donacion';
    public $timestamps = false;
    protected $fillable = [
         'nro_acta','fecha_acta','proveedor_id'
     ];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ingreso()
    {
        return $this->belongsTo('App\Models\Ingreso','id_compra','id');
    }
}
