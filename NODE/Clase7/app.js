const axios = require("axios");
const express = require("express");
const app = express();
const PORT = 3000;

const { monedas } = require("./monedas");

app.get("/", (req, res) => {
    res.send("Hola, mundo");
});

app.get("/clase", (req, res) => {
    const clase = {
        numero: 7,
        fecha: "2021-10-26",
        cantAlumnos: 25,
        cantProfesor: 0,
    };
    res.send(clase);
});

app.get("/moneda_dolar", monedas);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});


