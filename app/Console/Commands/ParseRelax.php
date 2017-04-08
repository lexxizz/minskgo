<?php

namespace App\Console\Commands;

use App\Event;
use App\Genre;
use App\Place;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Symfony\Component\DomCrawler\Crawler;

class ParseRelax extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse:relax';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'parse Relax.by';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $client = new Client();
        $res = $client->request('GET', 'http://afisha.relax.by/event/minsk/');

        $result = $res->getBody()->getContents();

        $crawler = new Crawler($result);
        $crawler->filter('.schedule__item .schedule__event-link')->each(function (Crawler $node, $i) {

            $link = new Client();
            $link_res = $link->request('GET', $node->attr('href'));
            $link_crawler = new Crawler($link_res->getBody()->getContents());


            $type =$link_crawler->filter('.b-afisha_about-place_dscr_place');
            $place['type'] = $type->count() ? $type->text() : null;
            $name = $link_crawler->filter('.b-afisha_about-place_dscr_place-title');
            $place['name'] = $name->count() ? $name->text() : null;
            $address = $link_crawler->filter('.b-institution_contacts_text_address_theatre');
            $place['address'] = $address->count() ? trim($address->text()) : null;

            $event_place = Place::where('name', $place['name'])->first();
            if(!$event_place) {
                $event_place = Place::create($place);
            }

            $name = $link_crawler->filter('.b-afisha-layout-theater_movie-title');
            $hash['name'] = $name->count() ? $name->text() : null;

            $image = $link_crawler->filter('.b-afisha-event img');
            $hash['image'] = $image->count() ? $image->attr('src') : null;

            if($link_crawler->filter('.b-afisha_cinema_description_text')->count()) {
                $content = $link_crawler->filter('.b-afisha_cinema_description_text')->html();
                $content = preg_replace("/<a target=.*?>(.*?)<\/a>/","", $content);
                $content = preg_replace("/<a rel=.*?>(.*?)<\/a>/","", $content);
                $hash['descr'] = trim($content);
            }
            $uid = $link_crawler->filter('.schedule-wrapper');

            $hash['uid'] = $uid->count() ? $uid->attr('event_id') : null;

            $price = $link_crawler->filter('.b-afisha_cinema_description_table_desc > .wysiwyg p');
            $hash['price'] = $price->count() ? $price->text() : null;

            $date_node = $link_crawler->filter('.schedule__day strong');
            $date_text = $date_node->count() ? $date_node->text() : null;

            if($date_text) {
                $date = explode('—', $date_text);
                if(sizeof($date) >=2) {
                    $hash['date_from'] = $this->getDateByString($date[0]);
                    $hash['date_to'] = $this->getDateByString($date[1]);
                }
            }

            $time_descr = $link_crawler->filter('.b-afisha_cinema_description_table_name');
            if($time_descr->count()) {
                if(trim($link_crawler->filter('.b-afisha_cinema_description_table_name')->first()->text()) == 'Время работы') {
                    $time = $link_crawler->filter('.b-afisha_cinema_description_table_desc')->first();
                    $hash['time'] = $time->count() ? trim($time->text()) : null;
                }
                if(trim($link_crawler->filter('.b-afisha_cinema_description_table_name')->first()->text()) == 'Жанр') {
                    $time = $link_crawler->filter('.b-afisha_cinema_description_table_desc')->first();
                    $genre_node = $time->count() ? trim($time->text()) : null;
                    $genres = explode(',', $genre_node);
                    foreach ($genres as $genre) {
                        if(!Genre::where('title', trim($genre))->first()){
                            Genre::create(['title' => trim($genre)]);
                        }
                    }
                }
            }
            
            
            if($link_crawler->filter('.schedule__day')->count()) {
                if(stristr(trim($link_crawler->filter('.schedule__day')->text()), 'сегодня')) {
                    $hash['date_from'] = date("Y-m-d H:i:s");
                }
                if(stristr(trim($link_crawler->filter('.schedule__day')->text()), 'завтра')) {
                    $hash['date_from'] = (new \DateTime())->modify('+1 day');
                }
                if(!isset($hash['date_from']) && !isset($hash['date_to'])){
                    $date = explode(',', $link_crawler->filter('.schedule__day')->text());
                    if(sizeof($date) == 1) {
                        $d = $date[0];
                    }
                    if(sizeof($date) == 2) {
                        $d = $date[1];
                    }
                    $hash['date_from'] = $hash['date_to'] = $this->getDateByString($d);
                }
                if(!isset($hash['time'])) {
                    $time = $link_crawler->filter('.schedule__seance-time');
                    $hash['time'] = $time->count() ? $time->text() : null;
                }

            }

            $hash['place_id'] = $event_place->id;
            if(!Event::where('uid', $hash['uid'])->first()) {
                Event::create($hash);
            }

        });
    }

    protected function getDateByString($string) {
        $ru_months = array( 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' );
        $month_index = array_search(trim(preg_replace('/\d/','', trim($string))), $ru_months);
        $month_index++;
        return \DateTime::createFromFormat("j.n.Y", preg_replace('~[^0-9]+~','', trim($string)). '.' .$month_index  . '.' . date("Y"));
    }
}
