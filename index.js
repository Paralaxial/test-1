const express = require('express');
const app = express();
const path = 'src/main'

app.get('/', (req, response) => {
  response.send("Dev mode");
  response.sendFile('/index.html', { root: path });
});

app.get('/style.css', (req, response) => {
  response.sendFile('/style.css', { root: path });
});

app.listen(3000, () => {
  console.log('server started');
});
