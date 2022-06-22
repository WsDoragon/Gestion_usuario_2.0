const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors());

//Introducir credenciales para utilizar mysql local
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "2507",
    database:"nodedb"
});

class usuarioMov {
    
    async create(formulario){
        const result = await db.query(
            `INSERT INTO usuarios (rut,nombre,apellido,correo,contraseña) VALUES ("${formulario.RUT}","${formulario.Nombre}","${formulario.Apellido}","${formulario.correo}","${formulario.contraseña}")`
        )
        return result.affectedRows;
    }

}

module.exports = {
    usuarioMov
};