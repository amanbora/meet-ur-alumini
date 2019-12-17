const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(4201, '127.0.0.1', () => {
    console.log('listening');
});

