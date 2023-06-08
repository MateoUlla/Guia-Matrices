function SumBorders(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    sum += matrix[0][i];
    sum += matrix[matrix.length - 1][i];
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    sum += matrix[i][0];
    sum += matrix[i][matrix[i].length - 1];
  }

  return sum;
}

let matrix = [
  [2, 3, 4],
  [5, 2, 7],
  [1, 2, 9],
];

let result = SumBorders(matrix);
console.log(result);
