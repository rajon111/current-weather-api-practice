const API_KEY = `b0eb4aff182657ee55b7cde0ffe39151`

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temp =>{
    console.log(temp)
    setInnerText('city', `${temp.name?temp.name:'not found'}`);
    setInnerText('temperature', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
}
