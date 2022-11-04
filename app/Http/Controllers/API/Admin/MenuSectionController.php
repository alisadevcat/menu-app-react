<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MenuSection;
use App\Models\Menu;

class MenuSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getById($section_id)
    {
        $section = MenuSection::find($section_id);
        return $section;
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $menu_id = $request->input('menu_id');
        $menu_type_id = $request->input('menu_type_id');

        $section = new MenuSection();

        $section->id_parent_section  = $request->id_parent_section;
        $section->title = $request->title;
        $section->sutitle = $request->subtitle;
        $section->price = $request->price;
        $section->style = $request->style;
        $section->side = $request->side;
        $section->field_order = $request->field_order;
        $section-> ordering = $request->ordering;
        $section->menu_type_id = $menu_type_id;
        $section->menu_id = $menu_id ;
        
        $section->save();

        return response()->json(["message"=>'Success']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
