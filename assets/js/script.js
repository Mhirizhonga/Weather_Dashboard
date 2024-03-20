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
    var apiKey = "0698e6ee1534490e088c24c085a18036"; //API Key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

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
    var apiKey = "0698e6ee1534490e088c24c085a18036"; //API Key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;  

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
    
    //Get existing search history from local storage
    var history = JSON.parse(localStorage.getItem("weatherhistory")) || [];

    //Add new city to search history
    localStorage.setItem("weatherHistory", JSON.stringify(history));

    //Display updated search history on the page
    displayHistory();
}

//Function to display search history on the page
function displayHistory() {

    //Get search history from localStorage
    var history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    //Clear existing search history displayed on the page
    $("#history").empty();

    //Loop through searcj history and display each city
    history.forEach(function (city)  {
        var listItem = $("<button>")
        .addClass("list-group-item list-group-item-action")
        .text(city);

        //Add click event listener to each city in search history
        listItem.click(function ()  {
            getCurrentWeather(city);
            getForecast(city);
        })

        //Append city to search history list
        $("#history").append(listItem);
    });
}

//Displaying search history on page load
displayHistory();

});