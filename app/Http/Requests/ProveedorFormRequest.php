<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProveedorFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nit' => 'required|string|unique:proveedors',
            'nombre' => 'required|string',
            'direccion' => 'required|string',
            'telefono' => 'required|string',
            'responsable' => 'required|string',
            'rubro' => 'required|string'
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'nit.required' => 'El nit del proveedor es obligatorio',
    //         'name.required' => 'El nombre del proveedor es obligatorio',
    //         'address.required' => 'La direccion del proveedor es obligatoria',
    //         'phone.required' => 'El telephone del proveedor es obligatiorio',
    //         'resp.required' => 'El responsable es obligatorio',
    //     ];
    // }
}
