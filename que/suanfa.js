/**
 *  用任意一种语言实现一个函数，判断一个给定整数数组中是否存在某两个元素之和恰好等于
 * 一个给定值 k 存在则返回 true，否则返回 false。该函数的输入参数有两个，
 * 第一个参数为整数数组 nums，第二个参数为整数 k，
 * 返回值为布尔值。可以参考以下签名，写出实现。【要求时间复杂度为 O(n)，n 为数组长度】
 */

var checkTwoSum = function (nums, k) {
  let tmp = [];
  for (let i = 0; i < nums.length; i++) {
    let dif = k - nums[i];
    if (tmp[dif] != undefined) {
      console.log('true')
      return true;
    }
    tmp[nums[i]] = i;
  }
  console.log('false')
  return false;
};


/**
 * 手动实现一种时间复杂度为 O(n log n) 的排序算法，可用任意语言实现，也可以只写出伪代码。
 */
//快速排序

function quickSort(arr, start, end) {
  let base = arr[start];
  let i = start, j = end;
  if (i >= j) return;
  while (i < j) {
    while (arr[j] > base && j > i) {
      j--;
    }

    while (arr[i] <= base && j > i) {
      i++;
    }

    if (i < j) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

  }
  arr[start] = arr[i];
  arr[i] = base;

  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);

}

let arr = [5, 8, 10, 9, 1];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// checkTwoSum(arr, 11);