//Escribir una funcion llamada capitalizar que reciba un String y capitalice 
//la primera letra de cada palabra

const capitalizar= frase =>{
    let arreglo=frase.split("");
    for(let n=0;n<arreglo.length;n++){
        if(n==0){
            arreglo[n]=arreglo[n].toUpperCase();
        }else if(arreglo[n-1]==" "){
            arreglo[n]=arreglo[n].toUpperCase();
        }
    }
    console.log(arreglo.join(""));
}

let frase=prompt("por favor ingrese una frase: ");

capitalizar(frase);