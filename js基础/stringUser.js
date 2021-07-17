//正则表达式
let reg=/.at/g;
let str="cat bat dat";
console.log(reg.exec(str))
console.log(reg.exec(str))
//[ 'cat', index: 0, input: 'cat bat dat' ]
//[ 'bat', index: 4, input: 'cat bat dat' ]

let reg2=new RegExp(/.at/,'g');
console.log(reg2.exec(str));
console.log(reg2.exec(str));

console.log(reg2.test(str))//true

console.log(str.substr(0,3))//cat 从0开始，截取撒个数
console.log(str.substring(0,4))//从0开始，到4之前结束
console.log(str.slice(0,2))//ca
console.log(str)
//三个都不会影响原字符串，substring和slice的区别在于 当传入的参数是负值的时候
console.log(str.substr(-2))//第二个参数是长度  at
console.log(str.substring(3,-2))//负值直接转换成0 cat
console.log(str.slice(0,-1))//第二个参数+长度之后的位置 cat bat da


