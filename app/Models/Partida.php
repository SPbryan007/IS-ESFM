<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Partida extends Model
{
    use SoftDeletes;

    protected $table = 'partida';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'nombre','codigo','descripcion'
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
        return $this->hasMany('App\Models\Articulo','partida_id','id');
    }
}
