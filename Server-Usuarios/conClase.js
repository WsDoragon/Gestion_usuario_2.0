const db = require('./db');
//const config = require('./config');

const express = require("express");
//const mysql = require("mysql");
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

    async getAll(){
        const result = await db.query(`SELECT * FROM usuario`);
        return result;
    }

    async deleteUser(id){
        const result = await db.query(`delete from usuario where rut =${id}`);
        //lo se... pero no me funciona con ";"
        await db.query(`delete from rol_usuario where id_rut = ${id}`);
        return result.affectedRows;
    }

    async editUser(id,form){
        const result = await db.query(`update usuario set rut="${form.RUT}", nombre="${form.Nombre}", apellido="${form.Apellido}", correo="${form.correo}", contraseña="${form.contraseña}" WHERE rut = ${id}`)
        return result.affectedRows;
    }

    async getUser(id){
        const result = await db.query(`SELECT * FROM usuario WHERE rut = ${id}`);
        return result;
    }

    async login(creds){
        const a = 0;
        return "hacerlo"
    }

}

module.exports = {
    usuarioMov
};