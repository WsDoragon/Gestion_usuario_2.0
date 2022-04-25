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
    password: "a",
    database:"gestion_usuario"
});
//-------------------------------------------------

app.post("/all", (req, res) => {
    db.query(
        "SELECT * FROM usuario",
        (err, result)=>{
            
            if (err){
                res.send({err: err});
            }
            
            if (result.length>0){
                res.send(result);
                console.log("funciono hasta aqui");
            }else{
                res.send({message: "No hay usuarios"});
            }
            
        }
    );
});

app.post("/login", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    db.query(
        "SELECT * FROM usuario WHERE rut_usuario = ? AND contraseña_usuario = ?",
        [username, password],
        (err, result)=>{
            
            if (err){
                res.send({err: err});
            }
            
            if (result.length>0){
                res.send(result);
                console.log("funciono hasta aqui");
            }else{
                res.send({message: "Wrong username/password combination!"});
            }
            
        }
    );
});

app.listen(3001, ()=>{
    console.log("running server");
})