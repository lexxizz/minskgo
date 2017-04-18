<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';

    protected $fillable = [
        'name', 'image', 'descr', 'uid', 'price', 'time', 'place_id', 'date_from', 'date_to', 'genre_id', 'free', 'k_int'
    ];

    public function place() {
        return $this->hasOne('App\Place', 'id', 'place_id');
    }

    public function genre() {
        return $this->hasMany('App\Genre', 'id', 'genre_id');
    }

    public function time() {
        return $this->hasMany('App\EventTimetable');
    }

    public function scopeActual($query) {
        return $query->where('date_to', '>=', new \DateTime());
    }
    
    public function scopeFree($query) {
        return $query->where('free', 1);
    }
    
    public function scopeUnfree($query) {
        return $query->where('free', 0);
    }
}
