const db = require('./db');
const config = require('./config');

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors());

class usuarioMov {
    
    async create(formulario){
        const result = await db.query(
            `INSERT INTO usuario (rut,nombre,apellido,correo,contraseña) VALUES ("${formulario.RUT}","${formulario.Nombre}","${formulario.Apellido}","${formulario.correo}","${formulario.contraseña}")`
        )
        return result.affectedRows;
    }

    async getUserRol(pepito){
        const result = await db.query(
            `SELECT rut, nombre, apellido, correo, name FROM usuario 
            JOIN rol_usuario ON rut = id_rut 
            JOIN rol ON id = id_rol 
            WHERE rut = "${pepito.rut}"`
        )
        return result;
    }

}

module.exports = {
    usuarioMov
};