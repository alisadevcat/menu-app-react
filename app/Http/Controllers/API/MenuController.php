<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\MenuSection;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuController extends Controller
{

    public function getByParams($params)
    {
        parse_str($params, $output);
        $template_menu = Menu::where('menu_type_id', intval($output['typeId']))->where('base_template', 1)->latest()->first();
        $template_menu->name = $output['menuName'];
        $template_menu->user_id = intval($output['userId']);

        return response()->json(["menu" => $template_menu, "base_template_id" => $template_menu->id]);
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
        $menu = new Menu();

        $menu->name = $request->input('name');
        $menu->title = $request->input('title');
        $menu->title2 = $request->input('title2');
        $menu->subtitle = $request->input('subtitle');
        $menu->subtitle2 = $request->input('subtitle2');
        $menu->menu_price = $request->input('menu_price');
        $menu->footer_local = $request->input('footer_local');
        $menu->footer_notice = $request->input('footer_notice');
        $menu->footer_notice2 =$request->input('footer_notice2');
        $menu->watermark = $request->input('watermark');
        $menu->base_template = 0;
        $menu->user_id = $request->input('user_id');
        $menu->menu_type_id = $request->input('menu_type_id');
        // $menu->created_at = $request->input('created_at');
        // $menu->updated_at = $request->input('updated_at');
        
        $menu->save();

        return response()->json(["menu" => $menu]);
    }


    // {"id":1,
    //     "name":"Primary Menu",
    //     "title":null,
    //     "title2":null,
    //     "subitle":null,
    //     "subtitle2":null,
    //     "menu_price":null,
    //     "footer_local":null,
    //     "footer_notice":"There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**","footer_notice2":"The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**",
    //     "watermark":null,
    //     "base_template":1,
    //     "user_id":1,
    //     "menu_type_id":1,
    //     "created_at":"2022-01-31T03:20:26.000000Z",
    //     "updated_at":"2022-01-31T03:20:26.000000Z"}
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
