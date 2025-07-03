let arr = [3, -1, -4, 2, 0, -5];

let countNegative = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
};

let countNegativeFilter = (array) => arr.filter((num) => num < 0).length;

// console.log(countNegative(arr));
console.log(countNegativeFilter(arr));
