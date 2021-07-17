for(var i=0;i<5;i++){
    // console.log(i);
}
//0 1 2 3 4

let arr=[0,1,2,3,4];
let obj={a:1,b:{c:Symbol(1)}}
// let a=arr.map(item=>{if(item<4)  item*item});//返回值是一个数组的undefined，所以map适用于对于一个数组做一个什么处理，并且不需要返回值，而且不改变原数组
//map如果想要保存改变的值，必须需要return回来 0, 1, 4, 9, 16,map不能中断循环

// let arrForEach=arr.forEach(item=>{if(item<4) console.log(item*item) })//undefined 
//forEach也不能中断循环

//数组的遍历
let everyRes=arr.every(item=> {return item>2});
// console.log(everyRes)//false

let filterRes=arr.filter(item=>{return item>2})
// console.log(filterRes)//[ 3, 4 ]

//forEach没有返回值
//map返回数组
//他们的参数都是item,index,array
let someRes=arr.some(item=>{return item<2})
// console.log(someRes)//true

//归并方法
//reduce reduceRight
//参数：pre，cur，index，array
// let res=arr.reduce((pre,cur,index,arr)=>{
//     cur=cur+pre;
//     console.log(cur)
//     return cur;
// },5)
// console.log(res);

//fake reduce
Array.prototype.fakeReduce=function(fn,base){
    let init=this;
    let arr=init.concat();//用于连接连个数组
    if(base) arr.unshift(base);

    let index,newValue;
    while(arr.length>=2){
        index=init.length-arr+1;
        newValue=fn.call(null,arr[0],arr[1],index,init);
        arr.splice(0,2,newValue);
    }
 
    return newValue; 
}

let res2=arr.fakeReduce((pre,cur,index,arr)=>{return pre+cur;},2)
// console.log(res2)

// console.log(typeof function(){})//function


// for(let key in arr){
//     console.log(key,arr[key])//遍历处原型上的属性
// }

for(let key in obj){
    console.log(key,obj[key])//遍历处原型上的属性
}

for(let key of arr){
    console.log(key,arr[key])
}

//!!!error因为obj不具有iterator的遍历器的接口
// for(let key of obj){
//     console.log(key,obj[key])
// }

