//genere un patron en forma de piramide

const piramide = (tamaño) => {
  console.log(" ".repeat(tamaño)+"*"+" ".repeat(tamaño-1));
  for (let i = 1; i <= tamaño; i++){
    console.log(" ".repeat(tamaño-i)+"**".repeat(i)+" ".repeat(tamaño-i));
  }
}

var tamaño = 10;
piramide(tamaño);