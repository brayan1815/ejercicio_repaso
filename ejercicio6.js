//ESCRIBIR UNA FUNCION LLMAADA MULTIPLICAR ARREGLO
//QUE RECIBA UN ARREGLO DE NUMEROS Y RETORNE
//LA MULTIPLICCION DE TODOSO LOS ELEMENTOS

const multiplicarArreglo = arreglo => {
  let multiplicacion = 1;
  for (let n = 0; n < arreglo.length; n++){
    multiplicacion = multiplicacion * arreglo[n];
  }
  return multiplicacion;
}

const arreglo = [1,2,3,4,5];

let respuesta = multiplicarArreglo(arreglo);

console.log("La multiplicacion de loe elementos del arreglo es: "+respuesta);