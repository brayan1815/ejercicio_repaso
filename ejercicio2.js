//escriba una funcion llmada likes que reciba un numero y retorne
// un String utilizando el formato de k para miles y m para millones

//Por ejemplo 1400 se convierta en 1k 34567 se convierta en 34k
// 7.000.352 se convierta en 7M si el numero es menol a mil se debe devolver el mismo numero
// cmomo String

const likes = (numero) => {
  let tex = "";
  if (numero >= 1000 && numero < 1000000) {
    let divi = Math.round(numero / 1_000).toFixed(0);
    tex = divi + "k";
  } else if (numero >= 1000000) {
    let divi = Math.round(numero / 1_000_000).toFixed(0);
    tex = divi + "M";
  } else if (numero < 1000) {
    tex = numero.toString();
  }
  return tex;
}

let numero = parseInt(prompt("Por favor ingrese un numero: "));

let res = likes(numero);
console.log(res);
