//用typeof 判断数据类型输出的是什么？
console.log('```````typeof`````````')
console.log(typeof null)//object
console.log(typeof NaN)//number
console.log(typeof undefined)//undefined
console.log(typeof [1,2])//object
console.log(typeof {a:1})//object
console.log(typeof Symbol())//symbol
console.log(typeof new Set())//object
console.log(typeof '1213')//string
console.log(typeof 123.123.toFixed(2))//string
//toFixed()会将number做一个隐形的转化，toString()
//undefined:是一个声明了但是未赋值的变量的状态，它是派生自null的值
console.log(undefined == null)//true
//null 是一个空指针对象，它是表名当前没有引用
console.log('```````boolean`````````')
//将值转换成布尔值
console.log(Boolean([]))//true
console.log(Boolean(""))//false
console.log(Boolean({}))//true
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false
console.log(Boolean(-1))//true
console.log(Boolean(2),Boolean(0))//true false
console.log(Boolean(NaN))//false

//总结：null，空字符串，undefined,0,NaN会被转化成false，其余都是true，注意负数和空数组的转化

console.log('```````number`````````')
//判断一个数字是不是无穷的，当位于最大值和最小值之间返回true
console.log(isFinite(1.2222))//true
//特殊的数字NaN：表示本来要返回数值，但是未返回数值的情况
//NaN与任何数据计算都是NaN，且他也不等于本身
//在调用一些方法的时候，对对象会先调用valueOf()方法，之后再去调用toString()
console.log(Number(null),Number(undefined),Number('1SDKJ'))//0 NaN NaN

//但是ParseInt,ParseFloat与Number直接转化是不一样的
//ParseInt,ParseFloat区别有两个：一个是float中的第一个非数字的字符是有效的，第二个区别是float会忽略0xa这种的0，他只能解析十进制

console.log('`````````````string````````````````')
//undefined,null没有toString()这个方法，剩下的都有
//所以可以用String()这个方法去转化
let obj={a:1}
console.log(obj.constructor==Object)//true
console.log(obj.hasOwnProperty('a'))//true

console.log('```````相等操作符``````````````')
//相等==
//比较之前要进行转换，操作数有布尔值则先转换成数值
//操作数由字符串和数值，先转换成数值‘
//操作数有对象则先调用对象的valueOf()
//NaN不等于任何值，本身也不等于
//全等===
//不转换时相等才是全等