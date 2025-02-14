//Escribir una funcion llamada numeo de as
// que reciba un string y retorne el numero de veces
// que aparece la letra a

let tex = prompt("Por favor ingrese una aplabra: ");

const numeroDeAes = (tex) => {
  let array = tex.split("");

  let suma = 0;

  for (let n = 0; n < array.length; n++){
    if (array[n] === "a" || array[n] === "A") {
      suma += 1;
    }
  }
  return suma;
}

let res = numeroDeAes(tex);

console.log("La cantidad de as que tiene la palabra es: " + res);

