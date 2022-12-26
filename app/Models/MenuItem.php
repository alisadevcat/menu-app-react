<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;
    
    protected $fillable = ["title", "subtitle", "price", "modifier", "mod_text", "notice", "ordering", "section_id"];
    
    public function menu_section(){
        return $this->belongsTo(MenuSection::class);
    }
}
