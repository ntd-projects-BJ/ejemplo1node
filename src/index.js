/*
'use strict';
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
server.listen(3000);


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Sebastian Samaniego');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
*/

const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animalRoutes");
const authRoutes = require("./routes/authentication");
const mongoose = require("mongoose");

require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON

//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use("/api", authRoutes);
app.use(express.json());

//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

    //Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
