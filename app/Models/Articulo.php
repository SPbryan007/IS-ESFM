<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Articulo extends Model
{

    const LINEA_1 = 1;
    const LINEA_2 = 2;
    const LINEA_3 = 3;

    use SoftDeletes;
    protected $table = 'articulo';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'nombre','linea','partida_id','unidad_medida_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function unidad_medida()
    {
        return $this->belongsTo('App\Models\UnidadMedida','unidad_medida_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function partida()
    {
        return $this->belongsTo('App\Models\Partida','partida_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lotes()
    {
        return $this->hasMany('App\Models\Lote','articulo_id','id');
    }
}
