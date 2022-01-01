<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use App\Models\Models\Client;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $clients = Client::all();

        $products = [
            [
                'id' => 1,
                'name' => 'VideoGame',
                'value' => '25'
            ],
            [
                'id' => 2,
                'name' => 'oGame',
                'value' => '65'
            ]
        ];

        return response()->json(
            [
                'clients' => $clients,
                'products' => $products,
            ]
          
        );
    }
}
