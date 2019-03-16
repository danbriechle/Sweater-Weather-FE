var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var currentLocation = 'denver,co'
// time
// Make a JS clock to be constantly showing the time without a page refresh
// sets the image call function
function imageCall(location) {
let image_url = `https://murmuring-sands-50229.herokuapp.com/api/v1/backgrounds?location=${location}`
$.get(image_url, function(data,status) {
  $("#background").css('background-image',`url("${data["image"]}")`)
});
}

function weatherCall(location) {
let weather_url = `https://murmuring-sands-50229.herokuapp.com/api/v1/forecast?location=${location}`
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
  //temp
  $("#temp_1").text([(`${data["hourly"][0]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_2").text([(`${data["hourly"][1]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_3").text([(`${data["hourly"][2]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_4").text([(`${data["hourly"][3]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_5").text([(`${data["hourly"][4]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_6").text([(`${data["hourly"][5]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_7").text([(`${data["hourly"][6]["temp"]}`).substring(0,2),"°"].join(''))
  $("#temp_8").text([(`${data["hourly"][7]["temp"]}`).substring(0,2),"°"].join(''))
  //time
  $("#time_1").text((`${data["hourly"][0]["time"]}`).substring(11,16))
  $("#time_2").text((`${data["hourly"][1]["time"]}`).substring(11,16))
  $("#time_3").text((`${data["hourly"][2]["time"]}`).substring(11,16))
  $("#time_4").text((`${data["hourly"][3]["time"]}`).substring(11,16))
  $("#time_5").text((`${data["hourly"][4]["time"]}`).substring(11,16))
  $("#time_6").text((`${data["hourly"][5]["time"]}`).substring(11,16))
  $("#time_7").text((`${data["hourly"][6]["time"]}`).substring(11,16))
  $("#time_8").text((`${data["hourly"][7]["time"]}`).substring(11,16))
  //five day list
  var startDate = date.substring(7, 9);
  var number = Number(startDate);
  //day
  $("#1-day").text([date.slice(5,7).replace("-","/"),(number)].join(''))
  $("#2-day").text([date.slice(5,7).replace("-","/"),(number+1)].join(''))
  $("#3-day").text([date.slice(5,7).replace("-","/"),(number+2)].join(''))
  $("#4-day").text([date.slice(5,7).replace("-","/"),(number+3)].join(''))
  $("#5-day").text([date.slice(5,7).replace("-","/"),(number+4)].join(''))
  //chance
  $("#1-chance-of-rain").text([(`${data["daily"][0]["chance"]}`).substring(2,5),"%"].join(''))
  $("#2-chance-of-rain").text([(`${data["daily"][1]["chance"]}`).substring(2,5),"%"].join(''))
  $("#3-chance-of-rain").text([(`${data["daily"][2]["chance"]}`).substring(2,5),"%"].join(''))
  $("#4-chance-of-rain").text([(`${data["daily"][3]["chance"]}`).substring(2,5),"%"].join(''))
  $("#5-chance-of-rain").text([(`${data["daily"][4]["chance"]}`).substring(2,5),"%"].join(''))
  //high
  $("#1-five-high").text([(`${data["daily"][0]["hi"]}°`).substring(0, 2),"°"].join(''))
  $("#2-five-high").text([(`${data["daily"][1]["hi"]}°`).substring(0, 2),"°"].join(''))
  $("#3-five-high").text([(`${data["daily"][2]["hi"]}°`).substring(0, 2),"°"].join(''))
  $("#4-five-high").text([(`${data["daily"][3]["hi"]}°`).substring(0, 2),"°"].join(''))
  $("#5-five-high").text([(`${data["daily"][4]["hi"]}°`).substring(0, 2),"°"].join(''))
  //low
  $("#1-five-low").text([(`${data["daily"][0]["low"]}°`).substring(0, 2),"°"].join(''))
  $("#2-five-low").text([(`${data["daily"][1]["low"]}°`).substring(0, 2),"°"].join(''))
  $("#3-five-low").text([(`${data["daily"][2]["low"]}°`).substring(0, 2),"°"].join(''))
  $("#4-five-low").text([(`${data["daily"][3]["low"]}°`).substring(0, 2),"°"].join(''))
  $("#5-five-low").text([(`${data["daily"][4]["low"]}°`).substring(0, 2),"°"].join(''))
});
};

// initial weather call and image call
$( document ).ready(function() {
  imageCall(currentLocation);
  weatherCall(currentLocation);
});

//button to refresh background image
$("#refresh-image").click(function() {
   imageCall(currentLocation);
});

$()
