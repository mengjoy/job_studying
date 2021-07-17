/**
 * 如何判断一组数字是否连续
 * [3,4,13,15,16,17]=false
 */

let arr = [-5, -4, 0, 1, 2, 3, 4, 13, 14, 15, 17, 20, 22, 99];

function test(arr) {
  let tmp = [];
  tmp.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 == arr[i - 1]) {
      tmp.push(arr[i]);
    } else {
      arr = arr.splice(i);
      break;
    }
  }
  console.log(tmp);
  tmp = [];
  if (arr.length != 1) {
    !!arr.length && test(arr);
  }
}

// test(arr);
/**
 * 这样写会出现问题。会栈溢出。如果后面是连续的话。上面那种写法
 */

// function arrrange(arr) {
//   let t = 0, ta, r = [];
//   arr.forEach(v => {
//     if (t == v) {

//     }

//   });
// }
