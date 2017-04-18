<?php

namespace App\Http\Controllers;

use App\Category;
use App\Console\Commands\ParseRelax;
use App\Event;
use App\Http\Requests;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

class CommonController extends Controller
{

    public function index() {
        return view('common');
    }
    
    public function events(Request $request) {
        $events_model = Event::with('place');
        $events_model->join('events_timetable', 'events_timetable.event_id', '=', 'events.id')->where('event_date', '>=', (new \DateTime())->setTime(00,00,00));

        if($request->date) {
            $events_model->where('event_date', '<=', (new \DateTime($request->date))->setTime(23, 59, 59))
                ->where('event_date', '>=', (new \DateTime($request->date))->setTime(00, 00, 00));
        }

        if(!empty(json_decode($request->categories))) {
        $events_model->join('genres', 'genres.id', '=', 'events.genre_id');
            $events_model->whereIn('genres.category_id', json_decode($request->categories));
        }
        
       if($request->free && !$request->not_free) {
            $events_model->free();
       }


        if($request->not_free && !$request->free) {
            $events_model->unfree();
        }

        if(!$request->not_free && !$request->free){
            $events = [];
        }else{
            $events = $events_model->groupBy('events.id')->orderBy('k_int', 'desc')->orderBy('events_timetable.event_date')->paginate(16);
        }
        
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


    public function parse() {

        $parser = new ParseRelax();
        $parser->handle();
        
//        $client = new  Client();
//        //$res = $client->request('GET', 'http://afisha.relax.by/event/10336364-delyfinarij-v-zooparke/minsk/');
//        $res = $client->request('GET', 'http://afisha.relax.by/expo/10703005-star-wars/minsk/');
//
//        $result = $res->getBody()->getContents();
//
//        $crawler = new Crawler($result);
//
//        $crawler->filter('.schedule__day')->each(function (Crawler $node, $i) {
//            var_dump($node->text());
//            var_dump($node->nextAll()->filter('.schedule__time')->text());
//        });
    }
    


}
