<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menuitems = MenuItem::all();
        return $menuitems;
    }

    public function getById($ids)
    {
        $ids = explode("-", $ids);

        foreach ($ids as $id) {
            $menu_items[] = MenuItem::where('section_id', intval($id))->get();
        }
        return $menu_items;
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
        $menuitems = [];

        foreach ($request->data as $key1 => $data) {

            foreach ($data as $key => $item) {

                $menuitem = new MenuItem([
                    'title' => $item['title'],
                    'subtitle' => $item['subtitle'],
                    'price' => $item['price'],
                    'style' => $item['style'],
                    'modifier' => $item['modifier'],
                    'mod_text' => $item['mod_text'],
                    'ordering' => $item['ordering'],
                    'notice' => $item['notice'],
                    'section_id' => $item['section_id'],
                ]);

                $menuitem->save();

                $items[] = $menuitem;
            }
            
            $menuitems = [$items,...$menuitems];
        }

        return response()->json(["menuitems" => $menuitems]);
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
