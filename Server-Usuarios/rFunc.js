const express = require('express');
const enrutador = express.Router();
const servicios = require('./conClase');
const sUsuarios = new servicios.usuarioMov();

enrutador.post('/create', async (req, res) => {
    res.json(await sUsuarios.create(req.body));
});

enrutador.post('/login', async(req,res)=> {
    res.json(await sUsuarios.login(req.body))
})

enrutador.post('/GetRol', async (req, res) => {
    res.json(await sUsuarios.getUserRol(req.body));
});

enrutador.delete('/:id', async (req, res) => {
    res.json(await sUsuarios.deleteUser(req.params.id));
});

enrutador.put('/:id', async (req, res) => {
    res.json(await sUsuarios.editUser(req.params.id, req.body));
});

enrutador.get('/all', async (req,res) => {
    res.json(await sUsuarios.getAll());
});

enrutador.get('/:id', async(req,res) => {
    res.json(await sUsuarios.getUser(req.params.id));
});

module.exports = enrutador;