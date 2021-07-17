/**
 * 
 *和为s的两个数字，输出乘机。
 */


function FindNumbersWithSum(array, s) {
  let i = 0, j = array.length - 1;
  let max = [];

  while (i < j) {
    if (array[i] + array[j] == s) {
      console.log([array[i], array[j]]);
      max.push(array[i] * array[j]);
      i++;
      j--;
    }

    if (array[i] + array[j] > s) {
      j--;
    }
    if (array[i] + array[j] < s) {
      i++;
    }
  }
  console.log(max);
  if (max.length == 0) {
    return false;
  }

}
let arr = [1, 2, 3, 11, 13, 15];
// FindNumbersWithSum(arr, 15);
/**
 * 输出和为S的连续正序列
 */

function FindContinuousSequence(arr, s) {
  let i = 0, j = 1;
  let sum = arr[i] + arr[j];
  while (i < j) {
    if (sum == s) {
      console.log(arr[i], arr[j]);
      return true;
    }
    if (sum < s && j < arr.length) {
      sum += arr[j + 1];
      j++;
    }
    if (sum > s && i >= 0) {
      sum -= arr[i - 1];
      i--;
    }
  }
  console.log('没有')
  return false;
}

FindContinuousSequence(arr, 7);

