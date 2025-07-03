
function findSecondLargest(arr) {
  if (arr.length < 2) return undefined;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? undefined : second;
}
  

console.log(findSecondLargest([5, 3, 8, 8, 9])); // 8
console.log(findSecondLargest([10, 10, 10])); // undefined
console.log(findSecondLargest([2, 1])); // 1
console.log(findSecondLargest([-5, -10])); // -10
console.log(findSecondLargest([1]));  