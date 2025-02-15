//Escribir una funcion llamada sume arreglo que reciba tres argumentos que reciba tres argumentos
//un arreglo de numeroas, la posicion inicial y la poscion final. La funcion debe retornar
// ka suma de tosdos los numeros dentro del rango (la posicion inicial y la posicion final, incluyendolas)

//NOTA:puedes asumir que la posicion incial va a ser menor o igual a la posicion fianl y que esta dentro
// de los limites del arreglo



let posin = prompt("Por favor ingrese el numero inicial: ");
let posfin = prompt("Por favor ingrese el numero final: ");
const arreglo = [10, 2, 5, 6, 1, 4, 5, 6, 7];

const sumaArreglo = (array, posin,posfin) => {
  if (posin <= array.length && posfin > posin && posfin < array.length) {
    let suma = 0;
    for (let n = posin; n <= posfin; n++){
      suma += parseInt(array[n]);
    }
    return suma;
  } else {
    throw new Error("El numero ingresado supera el tamaño del array"); 
  }
}

let resp = sumaArreglo(arreglo,posin ,posfin );
console.log(resp);
