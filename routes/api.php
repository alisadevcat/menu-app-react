<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\BranchController;
use App\Http\Controllers\API\MenuController;
use App\Http\Controllers\API\MenuTypeController;
use App\Http\Controllers\API\MenuSectionController;
use App\Http\Controllers\API\MenuItemController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/choose', [BranchController::class, 'index']);
Route::get('/start/{branch}', [MenuTypeController::class, 'getByBranchId']);
Route::get('/menu-items/all/{ids}', [MenuItemController::class, 'getById']);
Route::get('/menu-sections/all/{id}', [MenuSectionController::class, 'getById']);
Route::get('/menu-items/all/{id}', [MenuItemController::class, 'getById']);

Route::resource('menu-sections', MenuSectionController::class)->except(['index', 'create']);
Route::resource('menu-types', MenuTypeController::class);
Route::resource('menu-items', MenuItemController::class);
Route::resource('menus', MenuController::class)->except(['index', 'create']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
