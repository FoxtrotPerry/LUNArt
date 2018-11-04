const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);


app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

server.listen(3000, () => {
    console.log('running on 3000')
});