function miFuncion(a, b) {
    return a + b;
}

const miSegundaFuncion = function (a, b) {
    return a + b;
}

console.log(miFuncion(3, 2));

const precioFinal = function (precioNeto) {
    let iva = 100;
    let gastoDespacho = 200;
    const precioFinal = precioNeto - iva - gastoDespacho

    return precioFinal
}

console.log(precioFinal(10000));

function saludar(nombre){
    const saludo = `Hola, ${nombre}`;
    return saludo;
}

console.log(saludar("Gaston"));

const estudiantes = ["César", "Federico", "Gaston"];

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i])
}