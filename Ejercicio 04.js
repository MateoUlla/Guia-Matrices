function spiralPrint(numFilas, numColumnas, matriz) {
  let i,
    inicioFila = 0,
    finFila = numFilas - 1;
  let inicioColumna = 0,
    finColumna = numColumnas - 1;

  while (inicioFila <= finFila && inicioColumna <= finColumna) {
    for (i = inicioColumna; i <= finColumna; ++i) {
      console.log(matriz[inicioFila][i]);
    }
    inicioFila++;

    for (i = inicioFila; i <= finFila; ++i) {
      console.log(matriz[i][finColumna]);
    }
    finColumna--;

    if (inicioFila <= finFila) {
      for (i = finColumna; i >= inicioColumna; --i) {
        console.log(matriz[finFila][i]);
      }
      finFila--;
    }

    if (inicioColumna <= finColumna) {
      for (i = finFila; i >= inicioFila; --i) {
        console.log(matriz[i][inicioColumna]);
      }
      inicioColumna++;
    }
  }
}

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let numFilas = matriz.length;
let numColumnas = matriz[0].length;

spiralPrint(numFilas, numColumnas, matriz);
