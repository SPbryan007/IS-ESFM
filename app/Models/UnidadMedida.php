<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class UnidadMedida extends Model
{
    use SoftDeletes;

    protected $table = 'unidad_medida';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'sigla','nombre','descripcion',
    ];
    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articulos()
    {
        return $this->hasMany('App\Models\Articulo','unidad_medida_id','id');
    }

}
