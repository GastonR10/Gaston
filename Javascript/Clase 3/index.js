let numeroElegido= prompt ("Introduce un numero del 1 al 10")
let numero = parseInt(numeroElegido)

const numeroAleatorio = Math.round(Math.random() * 10);
if (numero > 10) {
    alert ("Del 1 al 10 por favor")
} else if (numero === numeroAleatorio) {
    alert ("Felicitaciones, salió sorteado el " + numeroAleatorio)
} else if (numero < numeroAleatorio){
    alert ("Menor, salió sorteado el " + numeroAleatorio)
} else {
    alert ("Mayor, salió sorteado el " + numeroAleatorio)
}





