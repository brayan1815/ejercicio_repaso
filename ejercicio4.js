//04.IMPRIMIR UN ARREGLO

//Escrinbir una funcion llamda imprimir arreglo que reciba un arreglo e imprima
//elemento en una linea aparte

const imprimirAreglo = (arreglo) => {
  for (let n = 0; n <= arreglo.length; n++){
    console.log(arreglo[n]);
  }
}

const arre = [10, 5, 5, 6, 2, 4, 5];

imprimirAreglo(arre);