<?php

namespace App\Http\Controllers;


use App\Repositories\LoteRepository;
use Illuminate\Http\Request;



class LoteController extends Controller
{
    /**
     * @var LoteRepository
     */
    private $loteRepository;

    /**
     * LoteController constructor.
     * @param LoteRepository $loteRepository
     */
    public function __construct(LoteRepository $loteRepository)
   {
       $this->loteRepository = $loteRepository;
   }

    public function getAll()
    {
        $lotes = $this->loteRepository->getAll();
        return response()->json($lotes,200);
    }
}
