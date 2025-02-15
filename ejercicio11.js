//Escribir una funcion llamada capitalizar que reciba un String y capitalice la primera letra

const capitalizar= palabra=>{
    let arreglo =palabra.split("");
    arreglo[0]=arreglo[0].toUpperCase();
    console.log(arreglo.join(""));
}

let palabra=prompt("Por favor ingrese la palabra: ");
capitalizar(palabra);