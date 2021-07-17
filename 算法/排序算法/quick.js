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

let arr = [7, 4, 5, 8, 3, 9, 10];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
//疑问？
/**
 * 为什么交换i++,j--的顺序会改变 输出的顺序
 */