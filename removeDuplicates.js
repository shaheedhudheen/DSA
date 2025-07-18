function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0; // pointer for unique elements

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; // length = index + 1
}
