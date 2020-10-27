<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donacion extends Model
{
   
    protected $table = 'donacion';
    protected $primaryKey = 'idDonacion';
    public $timestamps = false;
    protected $fillable = [
        'nro_acta','proveedor_id'
    ];
}
