<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;
    use HasFactory;
    //колонки, которые разрешаем заполнять
    protected $fillable = ['slug', 'title'];
 
    public function users(){
        return $this->belongsToMany(User::class);
    }
    public function menu_types(){
     return $this->hasMany(MenuType::class);
 }
}
