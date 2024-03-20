$(document).ready(function()  {

    //Function handling form submission
    $("#search-form").submit(function (event)  {
        event.preventDefault(); //Prevent default form submission behaviour

        var cityName = $("#search-input").val().trim(); //Value of input field

        //Checking property field is not empty
        if (cityName !== "")  {
            getCurrentWeather(cityName);//Call function to get curent weather
            getForecast(cityName);//Call function to get forecast data
            saveCity(cityName);//Call function to save city to search history
            $("search-input").val("");//Clear the input field after submission
        }
    });

    //Function to get current wweather data
function getCurrentWeather(city)  {
    var apiKey = ""; //API Key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid" + apiKey;

//Making AJAX request to OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET",
 }).then(function (response)  {
    //Process response and display current weather for requested city
    console.log(response);
    //Display current weather data on that page
      });
}

//Function to get forecast data
function getForecast(city) {
    var apiKey = ""; //API Key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid" + apiKey;  

//Making AJAX request to OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET",
     }).then(function (response)  {
        //Process response and display current weather for requested city
        console.log(response);
        //Display current weather data on that page
     });
}

// Function to save city to search history
function saveCity(city) {
    
}

});