// Tarea: Definir una función que determine
// - si un triángulo de uno de los siguientes tipos
// - Es equilátero
// - Es isósceles
// - Es escaleno
// - Calcular el área del triángulo



let ladoA = prompt("Introduce el largo de la Base");
let ladoB = prompt("Introduce el largo del lado B");
let ladoC = prompt("Introduce el largo del lado C");

let lado1 = parseInt(ladoA);
let lado2 = parseInt(ladoB);
let lado3 = parseInt(ladoC);

function Area(a, b, c) {
    var semiP = a/2+b/2+c/2;
    var areacuadrado = semiP*(semiP-a)*(semiP-b)*(semiP-c)
    return Math.sqrt(areacuadrado)
}

const areaTriangulo = Area(lado1, lado2, lado3)

if (lado1 > lado2 + lado3) {
    alert("Triángulo imposible!. Por favor revisar lados.")
}

if (lado2 > lado1 + lado3) {
    alert("Triángulo imposible!. Por favor revisar lados.")
}

if (lado3 > lado1 + lado2) {
    alert("Triángulo imposible!. Por favor revisar lados.")
}

if (lado1=lado2=lado3) {
    alert("El triángulo es equilátero y su área es "+areaTriangulo)
}

