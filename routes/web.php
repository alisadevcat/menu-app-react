<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SpaController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('app');
// });

Route::get('/{any_path?}', [SpaController::class, 'index'])->where('any_path', '(.*)');