//Escribir una funcion llmada contraseña valida
//que reciba un string y retoene true si el String es igual a
//"2F(jjbFSuj" o "eoZiugBf6G9". De lo contrario que retorne false

const contraseñaValida = (tex) => {
  if (tex === "jjbFSuj" || tex === "eoZiugBf6G9") {
    return true;
  } else return false;
}

let tex = prompt("Por favor ingrese la contraseña: ");
let respuesta = contraseñaValida(tex);

console.log(respuesta);