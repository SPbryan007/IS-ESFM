<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unidad extends Model
{

    use SoftDeletes;

    protected $table = 'unidad';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'nombre','funcionario_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function funcionario()
    {
        return $this->belongsTo('App\Models\Funcionario','funcionario_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function solicitantes()
    {
        return $this->hasMany('App\Models\Solicitante','unidad_id','id');
    }
}
