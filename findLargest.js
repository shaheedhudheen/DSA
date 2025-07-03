let nums = [5, 3, 8, 1, 4];

function largestNumber(nums) {
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

let findLargest = (nums) =>
  nums.reduce((max, current) => (current > max ? current : max));

console.log(findLargest(nums));
