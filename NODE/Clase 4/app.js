const express = require("express");

const app = express();

const PORT = 45000;

app.get("/", (req, res) => {
    res.send("¡Hola, mundo!")
});

app.get("/users", (req, res) => {
    res.send("Hola desde usuarios")
});

app.listen(PORT, () => {
    console.log(`Corriendo en http:localhost:${PORT}`);
});
