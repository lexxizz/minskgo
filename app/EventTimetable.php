<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventTimetable extends Model
{
    protected $table = 'events_timetable';

    protected $fillable = [
        'event_id', 'event_date', 'event_time'
    ];

}
