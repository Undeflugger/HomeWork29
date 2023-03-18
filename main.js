// За допомогою Node.js , Express.js створит ендпоінт

// POST /weather

// body: { city: 'Lviv' }
// Який отримує у якості параметра назву міста для якого потрбіно отримати погоду повертає швидкість вітру та температуру
// у вигляді JSON

// Щоб отримати дані про погоду потрібно зробити на сервері запит на API, тут потрібно змінювати LVIV на отримане місто

// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
'use strict'

document.forms[0].addEventListener('submit', async(event) => {
    event.preventDefault();
    const info = await axios.post('http://localhost:5000/city',{
            city: `${document.getElementById('city').value.toUpperCase()}`
    })
    console.log(info);
    const content = document.getElementsByClassName('content')[0];
    content.innerHTML = `<p>Погода у ${info.data.name} - ${info.data.weather[0].description}</p><p>Температура ${info.data.main.temp} C*</p><p>Швидкість вітру ${info.data.wind.speed} m/s</p>`;
})

