<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';

    protected $fillable = [
        'name', 'image', 'descr', 'uid', 'price', 'time', 'place_id', 'date_from', 'date_to'
    ];
}
