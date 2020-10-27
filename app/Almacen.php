<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Almacen extends Model
{
    use SoftDeletes;
    protected $table = 'almacen';
    protected $primaryKey = 'idAlmacen';
    public $timestamps = true;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'stock','saldo'
    ];
}
