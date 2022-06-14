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
    database:"gestion_usuario"
});
//-------------------------------------------------

app.post("/all", (req, res) => {
    db.query(
        "SELECT * FROM usuario ORDER BY rut ASC",
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
        "SELECT * FROM usuario WHERE rut = ? AND contraseña = ?",
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

app.get("/todo", (req, res)=> {
    db.query(
        "SELECT * FROM usuarios",
        (err, result)=>{
            
            if (err){
                res.send({err: err});
            }
            
            if (result.length>0){
                res.send(result);
                console.log("funciono hasta aqui");
            }
            
        }
    );
});
app.listen(3001, ()=>{
    console.log("running server");
})