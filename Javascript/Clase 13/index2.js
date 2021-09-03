let a = prompt("Introduzca un número");
let b = prompt("Introduzca otro número");
let c = prompt("Introduzca el tercer número");
let A = parseInt(a);
let B = parseInt(b);
let C = parseInt(c);

if (A===B||A===C||B===C) {
    alert("Por favor introducir tres valores diferentes")
}

const mayor = function (x, y, z){
    let may = x;
    if (y > may) {
        may = y
    }
    if (z > may) {
        may = z
    } 

    return may
}

const menor = function (x, y, z) {
    let may = x;
    if (y < may) {
        may = y
    }
    if (z < may) {
        may = z
    } 

    return may
}

console.log(mayor(A, B, C))
console.log(menor(A, B, C))
