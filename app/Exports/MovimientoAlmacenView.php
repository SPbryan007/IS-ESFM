<?php

namespace App\Exports;

use PhpOffice\PhpSpreadsheet\Cell\Cell;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use Maatwebsite\Excel\Concerns\WithCustomValueBinder;
use PhpOffice\PhpSpreadsheet\Cell\DefaultValueBinder;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

//class MovimientoAlmacenView implements FromCollection
class MovimientoAlmacenView extends  DefaultValueBinder implements FromView,ShouldAutoSize,withDrawings,WithCustomValueBinder
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

    public function bindValue(Cell $cell, $value)
    {
        if (is_numeric($value)) {
            $cell->setValueExplicit($value, DataType::TYPE_NUMERIC);

            return true;
        }

        // else return default behavior
        return parent::bindValue($cell, $value);
    }

//    public function styles(Worksheet $sheet)
//    {
        //$sheet->getStyle('G12:G97')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_00);
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

