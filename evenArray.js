let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function printEven(numbers) {
  numbers.forEach((num) => {
    if (!(num & 1)) {
      console.log(num);
    }
  });
}

printEven(numbers);
