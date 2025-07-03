let arr = [-10, -20, 0, 15, 3];

function smallestNumber(arr) {
  let smallest = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallest) {
      smallest = arr[index];
    }
  }
  return smallest;
}

console.log(smallestNumber(arr));
