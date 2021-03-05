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

/*
// API WHEATHER
const URLWHEATHER = 'https://icanhazdadjoke.com/';

// Main Function
const howIstheday = async () => {
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           let long = position.coords.longitude;
           let  lat = position.coords.latitude;

            /*
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat}, ${long}`;
            */
         /* 
            const api = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat}, ${long}`;
           await fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                 //   const { temperature, summary, icon } = data.currently;
                   console.log(data);
                });
console.log(data.id);
}
*/

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat}, ${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    /*const { temperature, summary, icon } = data.currently;
                    //Set DOM Elements from API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                   */
                    //Set Icon
                    setIcons(icon, document.querySelector('.icon'));

                    //Formula for Celsius
                    let celsius = (temperature - 32) * (5 / 9);

                    //Change temperature to C / F
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });
    }

    function setIcons(icon, iconId) {
        const skycons = new Skycons({ color: "white" });
        currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});