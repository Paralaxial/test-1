const express = require('express');
const app = express();
const path = 'src/main'

app.get('/', (req, response) => {
  response.sendFile('/index.html', { root: path });
});

app.get('/style.css', (req, response) => {
  response.sendFile('/style.css', { root: path });
});

app.get('/scripts/hideshow.js', (req, response) => {
  response.sendFile('/hideshow.js', { root: path + "/scripts" });
});

app.listen(3000, () => {
  console.log('server started');
});
