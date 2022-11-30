document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch( city ) {
    var key = 'd4704927e8828d83ba4cc33b4483e308'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) // convert data to json
        .then(function(data) {
            console.log(data)
            drawWeather(data)
        })
        .catch(function() {
            // catch any errors
        })
}

function cityWeather(e) {
    weatherDataFetch( 'Radeberg' );
}

function drawWeather( data ) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celcius + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
}