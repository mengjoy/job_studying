/**
 * arr=['a','a','a','c','b']
 * => {'a':3,'b':1,'c':1}
 */

 let arr=['a','a','a','c','b'];

 function arrToJson(arr){
     let obj={};
     for(let key in arr){
         let index=arr[key]
         if(!obj.hasOwnProperty(index)){
             obj[index]=1;
         }else{
            obj[index]++;
         }
         console.log(index) 
     }
     console.log(obj)
     return obj;
 }

//  arrToJson(arr);

 function sliceUrl(str){
     let obj={};
     let strVal=str.substring(str.indexOf('?')+1);
     let strArr=strVal.split('&');
     for(let i=0;i<strArr.length;i++){
         let arr=strArr[i].split('=');
         obj[arr[0]]=arr[1];
     }
     console.log(obj);
     return obj;     
 }

 sliceUrl('http://www.baidu.com?name=mengzhuo&a=1&b=2')
 
 //科学计数法
 /**
  * 2431436 = > 2,431,436
  */
 let num='23423424523'
 //?=正向预检
 num.replace(/\d{1,3}(?=(\d{3})+$)/g,'$&,' )

 /**
  * 有序数组中最后一次出现的index
  */
 let lastArr=[1,2,3,3,3,4,5] ;

 function findLastIndex(arr,num){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]==num){
            return i;
        }
    }
 }

//  console.log(findLastIndex(lastArr,3))

 //instaceof是看某个实列的原型的构造函数是否属于该函数
 //左边表达式的原型是否在右边表达式的原型上
 

 //升序合并两个有序数组
 let oneArr=[1,2,3,4,5,8];
 let twoArr=[3,4,7,9];

 function concatArr(arr1,arr2){
     let i=0;
     let j=0;
     let arr=[];
    while(arr1[i]&&arr2[j]){
        if(arr1[i]===arr2[j]){
            i++;j++;
            arr.push(arr1[i])
        }

        if(arr1[i]<arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
        
    }
    if(i<=arr1.length-1){
        arr.concat(arr1.slice(i)) 
    }

    if(j<=arr2.length-1){
        arr.push(...arr2.slice(j))
       
    }
    console.log(arr)
    return arr;
 }

//  concatArr(oneArr,twoArr)

var x=1,y=0,z=0;
var add=function(x){
    return x=x+1;
}

y=add(x)

function add(x){
    return x=x+3
}

var add=function(x){
    return x=x+5;
}

z=add(x);

console.log(x,y,z)//
