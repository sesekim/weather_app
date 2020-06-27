const API = {
    key: "6ac5860c942b1027ce14aa8288706526",
    url: "http://api.openweathermap.org/data/2.5"
};

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
function setQuery(e) {
    if(e.keyCode == 13 || e.which == 13){
        getResults(searchbox.value)
    }
}
function getResults(query){
    fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
    .then(function(weather){
        return weather.json();
    })
    .then(displayResults)
}
function displayResults(weather){
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`
    let today = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = today.toLocaleDateString();
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let weatherC = document.querySelector('.current.weather');
    weatehrC.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weatehr.main.temp_min} °C / ${weather.main.temp_max} °C`;  
}

