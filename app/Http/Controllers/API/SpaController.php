<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index() {
        return view('app');
    }

    public function nonexisting() {
        throw new Exception('I should never get here');
    }
}
