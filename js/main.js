// API JOKES
var count = 1;
const apiChange = () => {
    var URL;
    if (count % 2 == 0) {
        URL = "http://api.icndb.com/jokes/random";
    } else {
        URL = 'https://icanhazdadjoke.com/';
    }
    return URL;
}


// Jokes Main Function
const generateJoke = async () => {
    count++;
    let URL = apiChange(count);
    let response = await fetch(URL, {
        method: 'GET',
        headers: {
            "accept": "application/json"
        }
    });
    let data = await response.json()
    let joke;
    if (URL === 'http://api.icndb.com/jokes/random') {
        joke = data.value.joke;
    } else {
        joke = data.joke;
    }

    document.querySelector('.joke-div').innerHTML = `<h2>"${joke}"</h2>`;
}


// API WHEATHER
// Wheather Main Function
window.addEventListener('load', async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
            
            const apiKey = '47f77602bceb60c3cccc4a9191dbab9a';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let city = data.name;
                    let weatherTitle = data.weather[0].main;
                    let weatherDescription = data.weather[0].description;

                    document.getElementById('city').innerText = `${city}, `;
                    document.getElementById('weatherTitle').innerText = `${weatherTitle}, `;
                    document.getElementById('weatherDescription').innerText = weatherDescription;
                })
        });
    };
});

