<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $table = 'genres';

    protected $fillable = [
        'title'
    ];

    public function event() {
        $this->belongsTo('App\Event','genre_id','id');
    }
}
