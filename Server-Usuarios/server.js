var express = require('express');
var app = express();
//var server = require('http').Server(app);
const cors = require("cors");
// Rutas
const rUsuarios = require('./rFunc');
app.use(cors());
// Config
const PORT = 3001

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
// end-points
app.get('/', function(_req, res){
    console.log('alguien pide');
    res.json({mensaje: 'Hola mundo'});
});

app.use('/users', rUsuarios);

app.listen(PORT, function(){
    console.log(`Escuchando en ${PORT}`)
});