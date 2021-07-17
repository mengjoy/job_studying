/**
 * 打印机任务排序
 * 2 3 4 5 3 4=>需要打印3，如果后面有
 * 比3更大的优先级需要先打印其他大的，吧小的线从前面取出来放到尾部。
 */

function consoleTargetQueue(nums, index) {
  let tmp = 0;
  let m = nums[index];
  let arr;
  let line = '';

  for (let i in nums) {
    if (i == index) {
      line += 'p';
    }
    line += nums[i];
  }

  for (let i = 9; i > m; i--) {
    if (line.indexOf(i) != -1) {
      arr = line.split('');
      tmp += arr.length - 1;
      line = arr[arr.length - 1];

      for (let j = 0; j < arr.length - 1; j++) {
        line += arr[i];
      }
    }
  }

  let s = line.split('');
  for (let i in s) {
    if (s[i] == 'p') {
      tmp++;
      break;
    }
    if (s[i] == m) {
      tmp++;
    }
  }

  console.log(tmp);
}

// 参考链接：https://www.cnblogs.com/yuchao-taylor/p/12218460.html
