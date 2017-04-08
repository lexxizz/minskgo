<?php

namespace App\Http\Controllers;

use App\Event;
use App\Http\Requests;

class CommonController extends Controller
{

    public function index() {
        return view('common');
    }
    
    public function events() {
        $events = Event::all();
        return $events->toJson();
    }
    


}
