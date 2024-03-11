const express = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.end('MEMEBER SHIPOa')
});

module.exports = app;