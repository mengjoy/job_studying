//排序算法
//冒泡
let arr = [2, 4, 1, 0, 19, 3, 5, 6];

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}
//时间复杂度：o(n^2);

// bubble(arr);

//通过构建有序序列对未排序书，进行排序
//插入排序
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex++] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
}

//空间复杂度o(1)
//事件复杂度0(n^2)
// console.log(insert(arr));


//选择排序
//一趟找出一个最大值或者最小值，取一个值，然后用这个值与其他的对比，不符合条件则交换，
function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < tmp) {
        [arr[j], tmp] = [tmp, arr[j]];
      }
    }
    arr[i] = tmp;
  }
  console.log(arr);
}

// select(arr);
//时间复杂度：o(n2)

//快速排序
//思想：选取key值，比key小在key的左边，比key大在key右边

function quick(arr, left, right) {
  let i = left, j = right;
  if (left < right) {
    let base = arr[left];

    while (i < j) {
      while (base <= arr[j] && i < j) {
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j];
      }

      while (arr[i] <= base && i < j) {
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i];
      }
    }
    arr[i] = base;
    quick(arr, left, i - 1);
    quick(arr, i + 1, right);
  }
  console.log(arr);
}

quick(arr, 0, arr.length - 1);


//二分查找
function halfSearch(arr, key) {
  let min = 0, max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] < key) {
      min = mid + 1;
    } else if (arr[mid] > key) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// console.log(halfSearch(arr,3))


/**
 * 斐波那契数列  1 1 2 3 5 8 13 ····
 */

function facibo(index) {
  if (index === 1 || index === 2) {
    return 1;
  } else {
    return facibo(index - 1) + facibo(index - 2);
  }
}

function facibo2(index) {
  let f = [];
  f[0] = 1;
  f[1] = 1;
  for (let i = 2; i < index; i++) {
    f[i] = f[i - 1] + f[i - 2];

  }
  console.log(f[index - 1])
  return f[index - 1];
}
// facibo2(5)

