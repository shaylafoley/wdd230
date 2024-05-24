const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//39.76858549416339, -86.18907065116672

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.77&lon=-86.19&appid=d11ce00ac2839e198c4afb709dff6499&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.innerHTML = `${data.weather[0].description}`;
}
apiFetch();