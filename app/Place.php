<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $table = 'places';

    protected $fillable = [
        'type', 'name', 'address'
    ];

    public function event() {
        $this->belongsTo('App\Event','place_id','id');
    }
}
