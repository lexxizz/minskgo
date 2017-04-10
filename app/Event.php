<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';

    protected $fillable = [
        'name', 'image', 'descr', 'uid', 'price', 'time', 'place_id', 'date_from', 'date_to', 'genre_id'
    ];

    public function place() {
        return $this->hasOne('App\Place', 'id', 'place_id');
    }

    public function genre() {
        return $this->hasMany('App\Genre', 'id', 'genre_id');
    }
}
