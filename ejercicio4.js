//Escribir una funcion llamada fizzbuzz que reciba un string
// de acuerdo a lo siguiente

//fizz si el numero es multiplo de tres
//buzz si el numero es multiplo de 5
//fizzbus si el numero es mutltipo de tres tando como de cinco

//si no cumple ninguna de las condiciones anteruiores retonrnar el mismo numero

const fizzbuzz = (numero) => {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuz";
  } else if (numero % 3 == 0) {
    return "fizz";
  } else if (numero % 5 == 0) {
    return "buzz;"
  } else return numero;
}

let numero = parseInt(prompt("Por favor ingrese el numero: "));

let respuesta = fizzbuzz(numero);

console.log("El numero es: " + respuesta);