// Time complexity = O(n log n)

function merge(arr1, arr2, nums) {
  let i = 0;
  let j = 0;
  let k = 0;
  let l1 = arr1.length;
  let l2 = arr2.length;

  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      nums[k] = arr1[i];
      i++;
    } else {
      nums[k] = arr2[j];
      j++;
    }

    k++;
  }

  while (i < l1) {
    nums[k] = arr1[i];
    i++;
    k++;
  }

  while (j < l2) {
    nums[k] = arr2[j];
    j++;
    k++;
  }

  return nums;
}

function mergeSort(nums) {
  let n = nums.length;
  if (n <= 1) {
    return;
  }

  let mid = parseInt(n / 2);

  let arr1 = nums.slice(0, mid);
  let arr2 = nums.slice(mid, n);

  mergeSort(arr1);
  mergeSort(arr2);

  return merge(arr1, arr2, nums);
}
