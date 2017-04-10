<?php

namespace App\Http\Controllers;

use App\Category;
use App\Event;
use App\Http\Requests;
use Illuminate\Http\Request;

class CommonController extends Controller
{

    public function index() {
        return view('common');
    }
    
    public function events(Request $request) {
        $events_model = Event::with('place')->with('genre');


        if($request->date) {
            $events_model->where('date_from', '<=', (new \DateTime($request->date)))
                ->where('date_to', '>=', (new \DateTime($request->date)));
        }

        if(!empty(json_decode($request->categories))) {
        $events_model->join('genres', 'genres.id', '=', 'events.genre_id');
            $events_model->whereIn('genres.category_id', json_decode($request->categories));
        }

//        if($request->free) {
//            $events_model->where('price', '=', 'free');
//        }
//
//
//        if($request->not_free) {
//            $events_model->where('price', '!=', 'free');
//        }

        $events = $events_model->get();

        //var_dump($events);exit;
        return response()->json([
            'status' => 'OK',
            'events' => $events
        ]);
    }
    
    public function categories() {
        return response()->json([
            'status' => 'OK',
            'categories' => Category::all()
        ]);
    }
    


}
