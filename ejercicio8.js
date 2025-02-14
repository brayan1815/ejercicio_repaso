//Escribir una funcion llamda calcular impuesto
// que reciba dos argumentos numericos edad e ingresos
// si la edad es mayor o igual a 18 y los ingresos son mayores o iguales a 1000
//debe retornar ingresoss *40%, de lo contrario retornar 0

let edad = parseInt(prompt("Por favor ingrese la edad: "));
let ingresos = parseFloat(prompt("Por favor escriba los ingresos: "));

const calcularImpuesto = (edad,ingresos) => {
  if (edad >= 18 && ingresos>=1000) {
    return ingresos * 0.40;
  } else {
    return 0;
  }
}

let respuesta = calcularImpuesto(edad, ingresos);

console.log(respuesta);