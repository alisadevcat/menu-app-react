<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuType extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'shortname',
        'template',
        'media',
        'width',
        'height',
        'paper',
        'orientation',
        'size',
        'active'
    ];
    public function branch(){
        return $this->belongsTo(Branch::class);
    }
    public function menu(){
        return $this->hasOne(Menu::class);
    }
    public function menu_sections(){
        return $this->hasMany(MenuSection::class);
    }
}
