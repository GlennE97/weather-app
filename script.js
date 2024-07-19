document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('weather-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const city = document.getElementById('city-input').value.trim();
        console.log(`City submitted: ${city}`);
        getWeather(city);
    });

    async function getWeather(city) {
        const apiKey = '4864a8d20eaefe349000b2f416ff4bf9'; // Your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log(`Fetching weather for: ${city}`);
        console.log(`URL: ${url}`);

        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log('Response:', data);

            if (data.cod === 200) {
 
