// Time complexity = O(n^2)

function selectionSort(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let minValueIndex = i;
    for (let j = i; j < n; j++) {
      if (nums[j] < nums[minValueIndex]) {
        minValueIndex = j;
      }
    }

    [nums[i], nums[minValueIndex]] = [nums[minValueIndex], nums[i]];
  }

  return nums;
}
