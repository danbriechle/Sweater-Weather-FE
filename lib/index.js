// date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// time
// Make a JS clock to be constantly showing the time without a page refresh

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
  //glance left
  $("#temp").text([(`${data["current"]["current_temp"]}°`).substring(0,2),"°"].join(''))
  $("#high").text([(`${data["daily"][0]["hi"]}°`).substring(0, 2),"°"].join(''))
  $("#low").text([(`${data["daily"][0]["low"]}°`).substring(0, 2),"°"].join(''))
  //glance right

  $("#cityState").text(`${data["location"]}`)
  $("#date").text(date)
  // need time


  // details
  $("#details-summary").text(`${data["daily"][0]["summary"]}`)
  $("#feels").text(`${data["current"]["feels"]}°`)
  $("#humidity").text(`${data["current"]["humdity"]}%`)
  $("#visibility").text(`${data["current"]["visibility"]}`)
  $("#uv-index").text(`${data["current"]["uv"]}`)


  //hourly forcast
  $("#temp_1").text([(`${data["hourly"][0]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_2").text([(`${data["hourly"][1]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_3").text([(`${data["hourly"][2]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_4").text([(`${data["hourly"][3]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_5").text([(`${data["hourly"][4]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_6").text([(`${data["hourly"][5]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_7").text([(`${data["hourly"][6]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_8").text([(`${data["hourly"][7]["temp"]}`).substring(0,2),"°"].join(''))

  var dateToRemove = [(`${date}`).slice(0,5),"0",(`${date}`).slice(5)].join('')

  //time
  $("#time_1").text((`${data["hourly"][0]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_2").text((`${data["hourly"][1]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_3").text((`${data["hourly"][2]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_4").text((`${data["hourly"][3]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_5").text((`${data["hourly"][4]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_6").text((`${data["hourly"][5]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_7").text((`${data["hourly"][6]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
  $("#time_8").text((`${data["hourly"][7]["time"]}`).replace(":00.000+00:00", "").replace("T","").replace(dateToRemove,""))
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
