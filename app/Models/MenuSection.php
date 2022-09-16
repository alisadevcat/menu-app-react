<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuSection extends Model
{
    use HasFactory;
    protected $guarded = [];
     /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ["title", "subtitle", "price", "style", "side", "field order", "ordering", "menu_type_id", "menu_id","id_parent_section"];

    public function menu_type(){
        return $this->belongsTo(MenuType::class);
    }
    public function menu_items(){
        return $this->hasMany(MenuItem::class);
    }
    public function menu(){
        return $this->belongsTo(Menu::class);
    }
}
