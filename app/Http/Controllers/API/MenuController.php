<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Menu;
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
        $menu_template = Menu::where('menu_type_id', $request->type_id)->latest('updated_at')->first();

        $footer_notice = $menu_template->footer_notice;
        $footer_notice2 = $menu_template->footer_notice2;
        $menu = new Menu();

        $menu->name = $request->menu_name;
        $menu->footer_notice = $footer_notice;
        $menu->footer_notice2 = $footer_notice2;
        $menu->menu_type_id = $request->type_id;
        $menu->user_id = $request->user_id;
        $menu->save();
        
        $message = 'Success';

        return response()->json(['message'=> $message, "menu" => $menu]);
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
