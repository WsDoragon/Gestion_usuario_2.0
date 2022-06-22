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

app.post("/create", (req, res) => {
    const nombrea = req.body.Nombre;
    const apellidoa = req.body.Apellido;
    const ruta = req.body.RUT;
    const correoa = req.body.correo;
    const contraseñaa = req.body.contraseña;
    //console.log(req);
    db.query(
        `INSERT INTO usuarios (rut,nombre,apellido,correo,contraseña) VALUES ("${ruta}","${nombrea}","${apellidoa}","${correoa}","${contraseñaa}")`,
        (err,result) => {
            console.log("AAAAAAAAAAAAA");
            if (err){
                
                res.send({err: err});
            }
            if (result.length>0){
                console.log("funciono hasta aqui");
                res.send(result.affectedRows);
            }
        }
    )
})

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

app.get("/roles", (req, res)=> {
    db.query(
        "SELECT rol FROM usuarios",
        (err, result)=>{
            
            if (err){
                res.send({err: err});
            }
            
            if (result.length>0){
                res.send(result);
                console.log("array de roles entregado");
            }
            
        }
    );
});

app.post("/obtener", (req,res) => {
    const id_rol = req.body.id;
    db.query( "SELECT id, rol_name as Rol From roles WHERE id = ?", 
        [id_rol],
        (err, result)=>{
            if(err){
                res.send({err: err});
            }
            if (result.length>0){
                res.send(result);
                console.log("Estos son los roles del usuario")
            }
        }
    );
});



app.get("/todo", (req, res)=> {
    db.query(
        "SELECT rol FROM usuarios",
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