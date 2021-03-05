const URL = 'https://icanhazdadjoke.com/';

let test = fetch(URL, {"header":{
    "accept": "application/json"
}
.then(response => DataCue.json())
});

console.log(test);