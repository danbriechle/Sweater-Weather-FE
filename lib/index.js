// initial weather call with basic info 
$( document ).ready(function() {
let weather_url = 'https://murmuring-sands-50229.herokuapp.com/api/v1/forecast?location=denver,co'
$.get(weather_url, function(data,status){
  $("#cityState").text(`${data["location"]}`)
  $("#temp").text(`${data["current"]["feels"]}`)
});
})

// sets the background image
$( document ).ready(function() {
let image_url = 'https://murmuring-sands-50229.herokuapp.com/api/v1/backgrounds?location=denver,co'
$.get(image_url, function(data,status) {
  $("body").css('background-image',`url("${data["image"]}")`)
});
})
