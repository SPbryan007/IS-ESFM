<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DetalleIngreso extends Model
{
    use SoftDeletes;

    protected $table = 'detalle_ingreso';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'cantidad','precio_u','lote_id','ingreso_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function lote()
    {
        return $this->belongsTo('App\Models\Lote','lote_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ingreso()
    {
        return $this->belongsTo('App\Models\Ingreso','ingreso_id','id');
    }


}
