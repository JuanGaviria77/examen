const integrante1 = "juan pablo ortega"
const integrante2 = "jhonatan henao"
const integrante3 = "juan andres gaviria"


/*const express = require('express');
const http = require('http');
const app = express();
const host = 'localhost'
const port = 1337;

// PARAMS
app.get("/home/:user/:apellido", (req, res)=>{
    res.send(`hola ${req.params.user}, tu apellido es ${req.params.apellido}`);
})

app.listen(port, host, ()=>{
    console.log("server is runnig on htpp//"+ host + port)
})

*/
/*
const express = require('express');
const http = require('http');
const app = express();
const host = 'localhost'
const port = 1337;

// QUERY
app.get("/home/:user/:apellido", (req, res)=>{
    res.send(`hola ${req.params.user}, tu apellido es ${req.params.apellido}, tu edad es ${req.query.edad}, y te dedicas a ${req.query.trabajo}`);
})

app.listen(port, host, ()=>{
    console.log("server is runnig on htpp//"+ host + port)
})

*/

// BODY JSON
/*const express = require('express');
const app = express();
const host = 'localhost'
const port = 1337;

//interpretar textos

app.use(express.json())

app.get('/home', (req, res)=>{
    res.send(`hola como estan ${req.body.nombre}`);
    console.log(req.body    )
})
app.listen(port, host, ()=>{
    console.log(`la ruta de acceso es http://${host}:${port}`)
}) */


// BODY TEXT
/*const express = require('express');
const app = express();
const host = 'localhost'
const port = 1337;

//interpretar textos

app.use(express.text())

app.get('/home', (req, res)=>{
    res.send(`hola como estan ${req.body}`);
})
app.listen(port, host, ()=>{
    console.log(`la ruta de acceso es http://${host}:${port}`)
}) */

// BODY FORM
/*const express = require('express');
const app = express();
const host = 'localhost'
const port = 1337;

//interpretar textos

app.use(express.urlencoded({extended: false}))

app.get('/home', (req, res)=>{
    res.send(`hola como estan ${req.body.nombre}`);
})
app.listen(port, host, ()=>{
    console.log(`la ruta de acceso es http://${host}:${port}`)
}) */
