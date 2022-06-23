const express = require('express');
const enrutador = express.Router();
const servicios = require('./conClase');
const sUsuarios = new servicios.usuarioMov();

enrutador.post('/create', async (req, res) => {
    res.json(await sUsuarios.create(req.body));
});


enrutador.post('/GetRol', async (req, res) => {
    res.json(await sUsuarios.getUserRol(req.body));
});

module.exports = enrutador;