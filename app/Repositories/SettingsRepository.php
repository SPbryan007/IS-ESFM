<?php


namespace App\Repositories;

use App\Models\Periodo;
use App\Models\Salida;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class SettingsRepository
{


    /**
     * @param $withTrashed
     * @return string
     */
    public function getAll($withTrashed)
    {

        DB::unprepared(Storage::disk('public')->get('inventario_db2.sql'));
          //  file_get_contents('database/inventario_db2.sql'));
        return 'OK';
    }


    /**
     * @param $id
     */
    public function getById($id)
    {

    }

    public function  register($data)
    {

    }


    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {

    }

    public function setStatus($id)
    {

    }

    public function delete($id)
    {

    }

    public function getShowById($id)
    {

    }

}
