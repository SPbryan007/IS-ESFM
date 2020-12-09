<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lote extends Model
{
    use SoftDeletes;
    protected $table = 'lote';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'stock','saldo','precio_u','articulo_id',
    ];



    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function articulo()
    {
        return $this->belongsTo('App\Models\Articulo','articulo_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detalleingreso()
    {
        return $this->hasMany('App\Models\DetalleIngreso','lote_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detallesalida()
    {
        return $this->hasMany('App\Models\DetalleSalida','lote_id','id');
    }


}
