const express = require('express');
const axios = require('axios');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listen port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'});
})

app.get('/main.js', (req, res) => {
    res.sendFile('main.js', {root: '.'});
})



app.post('/city', async(req, response) =>{
    let info;
    const cities = req.body.city;
    await axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${cities}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then(res => {
            info = res.data;
        })
    
    
    response.status(200).json(info);
})