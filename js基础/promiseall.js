/**
 * promise.all的实现
 */

function promiseAll(iterators) {
  const promises = Array.from(iterators);
  const len = promises.length;
  let count = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, reject) => {
      promise.resolve(p).then((res) => {
        result[count] = res;
        count++;
        if (len == count) {
          resolve(result);
        }
      }).catch(err => reject(err))
    })
  })
}

