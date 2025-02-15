//ESscribir una funcion llamda remover ceros que reciba un arreglo de numeros y retorne un nuevo arreglo
// excluyendo los ceros

const removerCeros = (array) => {
  const arrayaux = [];
  for (let n = 0; n < array.length; n++){
    let aux = array[n]
    if (aux != 0) {
      arrayaux.push(aux);
    }
  }
  console.log("array nuevo: "+arrayaux)
}

const array = [1, 0, 5, 6, 2, 0, 3, 5, 4, 0];
console.log("array anterior: " + array);

removerCeros(array);