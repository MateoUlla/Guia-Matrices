function ArrayToSpiral(numFilas, numColumnas, ordenado) {
  let matriz = [];

  for (let i = 0; i < numFilas; i++) {
    matriz[i] = new Array(numColumnas);
  }

  let indice = 0;
  let filaInicio = 0,
    filaFin = numFilas - 1;
  let columnaInicio = 0,
    columnaFin = numColumnas - 1;

  while (filaInicio <= filaFin && columnaInicio <= columnaFin) {
    for (let i = columnaInicio; i <= columnaFin; ++i) {
      matriz[filaInicio][i] = ordenado[indice];
      indice++;
    }
    filaInicio++;

    for (let i = filaInicio; i <= filaFin; ++i) {
      matriz[i][columnaFin] = ordenado[indice];
      indice++;
    }
    columnaFin--;

    if (filaInicio <= filaFin) {
      for (let i = columnaFin; i >= columnaInicio; --i) {
        matriz[filaFin][i] = ordenado[indice];
        indice++;
      }
      filaFin--;
    }

    if (columnaInicio <= columnaFin) {
      for (let i = filaFin; i >= filaInicio; --i) {
        matriz[i][columnaInicio] = ordenado[indice];
        indice++;
      }
      columnaInicio++;
    }
  }

  return matriz;
}

let numFilas = 3;
let numColumnas = 4;
let ordenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let matrizResultante = ArrayToSpiral(numFilas, numColumnas, ordenado);
console.log(matrizResultante);
