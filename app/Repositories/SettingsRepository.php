<?php


namespace App\Repositories;

use App\Models\Periodo;
use App\Models\Salida;
use Carbon\Carbon;
use http\Env\Request;
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

    public function restoreBackup($file){
//        php artisan config:clear
//        php artisan cache:clear
//        composer dump-autoload
//        php artisan view:clear
//        php artisan route:clear
        ini_set('max_execution_time', 600);
        //set_time_limit(600);
        //try {
        DB::beginTransaction();
            //DB::unprepared("DROP TABLE IF EXISTS `articulo`, `compra`, `detalle_ingreso`, `detalle_salida`, `devolucion`, `donacion`, `funcionario`, `ingreso`, `lote`, `migrations`, `partida`, `periodo`, `proveedor`, `salida`, `solicitante`, `unidad`, `unidad_medida`, `usuario`");
            $restore_file  = $file->getPathName();
            $server_name   = env('DB_HOST');
            $username      = env('DB_USERNAME');
            $password      = env('DB_PASSWORD');
            $database_name = env('DB_DATABASE');
            $cmd = "mysql -h {$server_name} -u {$username} -p{$password} {$database_name} < $restore_file";
            $output =  array();
            exec($cmd, $output,$worked);
            switch($worked){
                case 0:
                    DB::commit();
                    return true;
                   break;
                case 1:
                    DB::rollBack();
                    throw new \Exception(', Verifique si el archivo existe');
                    break;
            }
    }


    public function getBackup()
    {
        $server_name   = env('DB_HOST','127.0.0.1');
        $username      = env('DB_USERNAME','root');
        $password      = env('DB_PASSWORD','12345678');
        $database_name = env('DB_DATABASE','inventario_db2');
        $path_file     = public_path()."/backups/backup.sql";
        $cmd="mysqldump --no-defaults --opt -h {$server_name} -u {$username} -p{$password}  {$database_name} > {$path_file}";
        $output =  array();
        exec($cmd, $output,$worked);
        switch($worked){
            case 0:
                return $path_file;
                break;
            case 1:
                throw new \Exception('ha ocurrido un error al exportar el archivo.');
                break;
            case 2 :
                throw new  \Exception('verifique la conexion con la base de datos.');
        }
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
