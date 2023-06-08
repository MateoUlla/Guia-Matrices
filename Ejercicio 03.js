function SumElems(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0 && num >= 0 && num <= 100 && num % 6 === 0) {
      sum += num;
    }
  }

  return sum;
}

let numbers = [4, 10, 12, 15, 24, 30, 50, 60, 70, 80, 90, 100];
let result = SumElems(numbers);
console.log(result);
