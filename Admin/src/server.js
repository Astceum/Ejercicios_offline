const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings  configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'))

// Middlewares (funciones que se van ejecutandose mientras va lleganddo peticiones)
app.use(express.urlencoded({extended: false}));


// Global Variables



// Routes
app.get('/', (req, res)=>{
    res.send('hello world');
})


// Static files
app.set(express.static(path.join(__dirname, 'views')));


module.exports = app;