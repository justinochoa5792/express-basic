const express = require('express');

const app = express();

app.use(express.static('views'));
app.use(express.static('public'))

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/About', (request, response, next) => {
    response.sendFile(__dirname + '/views/About.html');
});

app.get('/Works', (request, response, next) => {
    response.sendFile(__dirname + '/views/Works.html');
});

app.listen(3000);