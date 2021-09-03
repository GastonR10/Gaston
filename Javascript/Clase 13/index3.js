//funcion que suma todos los números desde 1 hasta n

const sumatoria = function (n){
    let suma = 0;
    for (let i = 0; i <= n; i++){
        suma = suma + i;
    }
    return suma;
}

console.log(sumatoria(100))
