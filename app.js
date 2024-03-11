const express = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.end('HOLA KIKI estoy haciendote otra prueba')
});

module.exports = app;