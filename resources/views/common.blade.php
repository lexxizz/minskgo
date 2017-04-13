<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MinskGo!</title>

    <meta name="_token" content="{{ csrf_token() }}">
    <link href="{!! asset('css/common.css') !!}" media="all" rel="stylesheet" type="text/css" />
    <link href="{!! asset('css/flatpickr.min.css') !!}" media="all" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|PT+Sans:700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700" rel="stylesheet">
    <script src="https://use.fontawesome.com/a522b0d004.js"></script>
    <script src="{!! asset('js/nouislider.min.js') !!}"></script>

</head>

<body>
<div class="body body--popup" id="layout__main"></div>

<script src={{ env('NAME') }}></script>

</body>
</html>
