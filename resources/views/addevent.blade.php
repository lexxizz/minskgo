<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <link href="{!! asset('css/formstyle.css') !!}" media="all" rel="stylesheet" type="text/css" />
    </head>
    <body>
    @if(session()->has('message'))
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif
    <form  class="mg-form" action="{{action('AdminController@store')}}" method="post">
        <h3>Форма ручного создания событий</h3>
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input name="name" type="text" class="mg-form__input" id="title" placeholder="Заголовок"/>
        <input name="price" type="number" class="mg-form__input" id="price" placeholder="Цена"/>
        <input name="time" type="text" class="mg-form__input" id="time" placeholder="17:00"/>
        <input name="place_title" type="text" class="mg-form__input" id="place" placeholder="Название места"/>
        <input name="address" type="text" class="mg-form__input" id="address" placeholder="г. Минск, ул. Гикало, 5"/>
        <input name="date_from" type="date" class="mg-form__input" id="date-1" placeholder="Дата с"/>
        <input name="date_to" type="date" class="mg-form__input" id="date-2" placeholder="Дата по"/>
        <input name="image" type="text" class="mg-form__input" id="img" placeholder="Ссылка на картинку"/>
        <input name="k_int" type="number" class="mg-form__input" id="int" placeholder="Коэффициент интереса 1-10"/>
        <input name="category" type="text" class="mg-form__input" id="cat" placeholder="Категория"/>
        <textarea name="descr" class="mg-form__input mg-form__input--textarea" id="descr" cols="30" rows="10" placeholder="Разметка основного текста"></textarea>
        <input type="submit" class="mg-form__input mg-form__input--submit"/>
    </form>
    </body>
</html>
