<?php

namespace App\Http\Controllers;

use App\Event;
use App\Genre;
use App\Place;
use Illuminate\Http\Request;
use App\Http\Requests;

class AdminController extends Controller
{

    public function add() {

        return view('addevent');
    }
    

    public function store(Request $request){
       var_dump($request->place_title);exit;
        if(!$id = Place::where(['name' => $place_title])){

        }
        Event::create($request->all());
        //Category::create($request->all());
        return back()->with('message', 'Событие добавлено');
    }


}
