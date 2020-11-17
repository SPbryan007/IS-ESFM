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
     * @return mixed
     */
    public function getAll($withTrashed)
    {

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
