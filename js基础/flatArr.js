let arr = [1, [2, [3, 4, 2], 2], 5, [6]];
//qu 重复数据并且升序
// console.log(Array.from(new Set(arr)).sort((a,b)=>a-b));

function spreadFlat(arr) {
  let array = [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      array.push(...spreadFlat(ele))
    } else {
      array.push(ele);
    }
  });
  console.log(array)
  return array;
}
spreadFlat(arr)

// const flat=arr=>arr.reduce((a,b)=>a.concat(Array.isArray(b)?flat(b):b,[]))
// console.log(flat(arr))

function flatArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArr(arr[i]))
    } else {
      result.push(arr[i]);
    }

  }
  return result;
}

Array.prototype.fakeReduce = function fakeReduce(fn, base) {
  // let arr = base ? this.unshift(base) : this;// 首进,返回新数组的长度，影响原数组 故不能这么写
  let initialArr = this;
  let arr = initialArr.concat(); //得到副本

  if (base) arr.unshift(base); // 当存在归并基础值的参数时，将其从数组首部推入
  let index;

  while (arr.length > 2) {
    index = initialArr.length - arr.length + 1;
    let newValue = fn.call(null, arr[0], arr[1], index, initialArr);
    arr.splice(0, 2); // 删除前两项，影响原数组
    arr.unshift(newValue);// 把 fn(arr[0],arr[1]) 的结果从数组首部推入
  }
  index += 1;
  let result = fn.call(null, arr[0], arr[1], index, initialArr);
  return result;
};
