<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\MenuType;
use Illuminate\Http\Request;

class MenuTypeController extends Controller
{
   public function index()
   {
      $menu_types = MenuType::all();
      return $menu_types;
   }
   public function getByBranchId($branch)
   {
      $id = Branch::where('slug', $branch)->pluck('id');
      $menutypes = MenuType::where('branch_id', $id)->get();
      return $menutypes;
   }
}
