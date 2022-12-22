<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MenuSection;

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

     public function getById($base_template_id){
        $template_sections = MenuSection::where('menu_id', $base_template_id)->get();
        return $template_sections;
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

        // foreach ($request as $item){

        //     $section = new MenuSection();

        //     $section->id_parent_section = $item->input('id_parent_section');
        //     $section->title = $item->input('title');
        //     $section->sutitle = $item->input('subtitle');
        //     $section->price = $item->input('price');
        //     $section->style = $item->input('style');
        //     $section->side = $item->input('side');
        //     $section->field_order = $item->input('field_order');
        //     $section->ordering = $item->input('ordering');
        //     $section->menu_type_id = $item->input('menu_type_id');
        //     $section->menu_id = $item->input('menu_id');

        //     $section->save();

        //     $sections[] = $section;
        // }

        return response()->json(["sections"=> "sections" ]);

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
