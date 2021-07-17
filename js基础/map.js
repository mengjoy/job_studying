/**
 * 实现map的polliy
 */

function map(arr, fun) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      res[i] = fun.call(null, a[i], i, a);
    }
  }
  return res;

}

/**
 * reduce的实现
 *
 */

function reduce(arr, fun, init) {

}