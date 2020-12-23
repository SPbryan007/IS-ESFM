<?php

namespace App\Exports;

use App\Models\Lote;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

//class MovimientoAlmacenView implements FromCollection
class MovimientoAlmacenView implements FromView,ShouldAutoSize,withDrawings
{
    use Exportable;

    public function __construct($data,$formato_view)
    {
        $this->data = $data;
        $this->formato_view = $formato_view;
    }

    public function view() : View{
        return \view($this->formato_view,[
           'data' => $this->data
        ]);
    }

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('This is my logo');
        $drawing->setPath(public_path('img/logo.jpeg'));
        if($this->data['formato'] == 'A'){
            $drawing->setHeight(100);
            $drawing->setCoordinates('C2');
        }
        if($this->data['formato'] == 'B'){
            $drawing->setHeight(120);
            $drawing->setCoordinates('D2');
        }
        if($this->data['formato'] == 'KARDEX'){
            $drawing->setHeight(100);
            $drawing->setCoordinates('G3');
        }
        if($this->data['formato'] == 'SALDOS'){
            $drawing->setHeight(100);
            $drawing->setCoordinates('B2');
        }

        return $drawing;
    }

//    public function styles(Worksheet $sheet)
//    {
//        $styleArray = array(
//            'borders' => array(
//                'outline' => array(
//                    'style' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_DASHED,
//                    'color' => array('argb' => 'FFFF0000'),
//                ),
//            ),
//        );
//        $sheet->getStyle('A4:H13')->applyFromArray($styleArray);
//    }



//    /**
//    * @return \Illuminate\Support\Collection
//    */
//    public function collection()
//    {
//        return Lote::all();
//    }
}

