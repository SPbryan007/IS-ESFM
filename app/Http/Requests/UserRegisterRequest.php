<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
            'nombre' => 'required|string',
            'apellido' => 'required|string',
            'documento' => 'required|string',
            'rol' => 'required|string'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre es requerido',
            'apellido.required' => 'El apellido es requerido',
            'documento.required' => 'El documento es requerido',
            'rol.required' => 'El rol es requerido'
        ];
    }
}
