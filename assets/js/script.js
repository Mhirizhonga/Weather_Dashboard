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

});