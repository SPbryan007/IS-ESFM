<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;//it was false
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string',
            'password' => 'required|string'
        ];
    }

    public function messages()
    {
        return [
            'username.required' => 'El nombre de usuario es obligatorio',
            'password.required' => 'La contraseña es obligatoria'
        ];
    }
}
