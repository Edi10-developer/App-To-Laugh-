// API JOKES
const URL = 'https://icanhazdadjoke.com/';

// Main Function
const generateJoke = async () => {
    let response = await fetch(URL, {
        method: 'GET',
        headers: {
            "accept": "application/json"
        }
    });
    let data = await response.json()
    let joke = data.joke;

    document.querySelector('.joke-div').innerHTML = `<h2>${joke}</h2>`;
    console.log(joke);
}


// API WHEATHER
window.addEventListener('load', async () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
        
        let apiKey = '47f77602bceb60c3cccc4a9191dbab9a';

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                 let city = data.name;
                 let weatherTitle = data.weather[0].main;
                 let weatherDescription = data.weather[0].description;
                 let windSpeed = data.wind.speed;
                 console.log(city);// Return your CITY NAME

                 //Set DOM Elements from API
                 /*
                 temperatureDegree.textContent = temperature;
                 temperatureDescription.textContent = summary;
                 locationTimezone.textContent = data.timezone;
                */
                //Set Icon
                //setIcons(icon, document.querySelector('.icon'));

                //Formula for Celsius
                // let celsius = (temperature - 32) * (5 / 9);

              /*  //Change temperature to C / F
                  temperatureSection.addEventListener('click', () => {
                      if (temperatureSpan.textContent === "F") {
                          temperatureSpan.textContent = "C";
                          temperatureDegree.textContent = Math.floor(celsius);
                      } else {
                          temperatureSpan.textContent = "F";
                          temperatureDegree.textContent = temperature;
                      }
                  });  */

            });


        function setIcons(icon, iconId) {
            const skycons = new Skycons({ color: "white" });
            currentIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconId, Skycons[currentIcon]);
        };
    }