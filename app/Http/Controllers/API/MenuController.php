<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\MenuSection;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuController extends Controller
{
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

        $type_id = $request->input('type_id');

        $template_menu = Menu::where('menu_type_id',  $type_id)->where('base_template', 1)->latest()->first();
        // $template_sections = MenuSection::where('menu_id', $template_menu->id)->get();

        // foreach($template_sections as $section){
        //     $template_menu_items[] = MenuItem::where('section_id', $section->id)->get();
        // }

        $footer_notice = $template_menu->footer_notice;
        $footer_notice2 = $template_menu->footer_notice2;
        $title = $template_menu->title;
        $title2 = $template_menu->title2;
        $subtitle2 = $template_menu->subtitle2;
        $subtitle = $template_menu->sutitle;
        $menu_price = $template_menu->menu_price;
        $footer_local = $template_menu->footer_local;
        $footer_watermark = $template_menu->watermark;

        $menu = new Menu();

        $menu->name = $request->menu_name;
        $menu->title = $title;
        $menu->title2 = $title2;
        $menu->subtitle = $subtitle;
        $menu->sutitle2 = $subtitle2;
        $menu->menu_price = $menu_price;
        $menu->footer_local = $footer_local;
        $menu->watermark = $footer_watermark;
        $menu->footer_notice = $footer_notice;
        $menu->footer_notice2 = $footer_notice2;
        $menu->menu_type_id = $request->type_id;
        $menu->user_id = $request->user_id;
        // $menu->save();

        return response()->json(["menu" => $menu, "base_template_id"=>$template_menu->id]);
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
