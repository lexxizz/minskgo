var btnFilter = document.querySelector('.btn-round--filter');
var blockFilter = document.querySelector('.filter');
btnFilter.addEventListener('click', function(e) {

  blockFilter.classList.toggle('filter--active');
});

var slider = document.getElementById('range');
noUiSlider.create(slider, {
	start: [ 18, 22 ],
	connect: true,
	step: 1,
	range: {
		'min': 0,
		'max': 24,
	}
});

var snapValues = [
	document.getElementById('sliderValueMin'),
	document.getElementById('sliderValueMax')
];

slider.noUiSlider.on('update', function( values, handle ) {
	var tt = Math.round(values[handle]);
	snapValues[handle].innerHTML = tt;
});

flatpickr(".input__date", {
	dateFormat: 'd-m-Y',
	mode: "multiple"
});

var card = document.querySelector('.card');
var prev = document.querySelector('.preview');
var prevClose = document.querySelector('.preview__close');
var body = document.querySelector('.body');

card.addEventListener('click', function(e) {
  e.preventDefault();
  prev.classList.add('preview--open');
  body.classList.add('body--popup');
})
prevClose.addEventListener('click', function(e) {
  e.preventDefault();
  prev.classList.remove('preview--open');
  body.classList.remove('body--popup');
})
