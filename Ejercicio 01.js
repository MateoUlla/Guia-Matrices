function PrimeSum(matrix) {
  let sum = 0;

  function isPrime(num) {
    if (num < 2) {
      return false;
    }

    if (num === 2) {
      return true;
    }

    if (num % 2 === 0) {
      return false;
    }

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isPrime(matrix[i][j])) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

let matrix = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];

let result = PrimeSum(matrix);
console.log(result);
