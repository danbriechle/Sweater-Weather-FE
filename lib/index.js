// date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// time
var time = today.getHours() + ":" + today.getMinutes();

console.log(time)
// sets the image call function
var image = function() {
let image_url = 'https://murmuring-sands-50229.herokuapp.com/api/v1/backgrounds?location=denver,co'
$.get(image_url, function(data,status) {
  $("#background").css('background-image',`url("${data["image"]}")`)
});
}


// initial weather call with basic info
$( document ).ready(function() {
let weather_url = 'https://murmuring-sands-50229.herokuapp.com/api/v1/forecast?location=denver,co'
$.get(weather_url, function(data,status){
  $("#summary").text(`${data["daily"][0]["summary"]}`)
  $("#temp").text(`${data["current"]["current_temp"]}`)
  $("#high").text(`${data["daily"][0]["hi"]}`)
  $("#low").text(`${data["daily"][0]["low"]}`)

  $("#cityState").text(`${data["location"]}`)
  $("#time-date").text(`${date}, ${time}`)
  $("#details-summary").text(`${data["daily"][0]["summary"]}`)

  $("#feels").text(`${data["current"]["feels"]}`)
  $("#humidity").text(`${data["current"]["humdity"]}`)
  $("#visibility").text(`${data["current"]["visibility"]}`)
  $("#uv-index").text(`${data["current"]["uv"]}`)

});
})

// sets the background image
$( document ).ready(function() {
  image()
});


//button to refresh background image
$("#refresh-image").click(function() {
  image()
});
