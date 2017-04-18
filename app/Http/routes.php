<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/parse', 'CommonController@parse');
Route::get('/event/add', 'AdminController@add');
Route::post('/event/store', 'AdminController@store');
Route::any('{all?}', 'CommonController@index');

Route::group(['prefix' => 'ajax'], function () {
    Route::post('/events', 'CommonController@events');
    Route::get('/categories/all', 'CommonController@categories');
});