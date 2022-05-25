// Time complexity = O(n^2)

function insertionSort(nums) {
  const n = nums.length;

  for (i = 1; i < n; i++) {
    let temp = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = temp;
  }

  return nums;
}
