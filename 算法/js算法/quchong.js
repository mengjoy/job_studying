function quchong(arr){
    let newArr={};
    let list=[];
    for(let i in arr){
        if(newArr[(arr[i])]){
           return;
        }else{
            newArr[arr[i]]=true;
            list.push(arr[i]);
        } 
        console.log(list)
    }
    
    return list;
}

let arr=[1,3,5,0,2,20,6,6];
//必须是[...arr] 而不能是[arr]
// console.log(Array.from(new Set([...arr])));

// let newArr=quchong(arr);
// console.log(newArr);//为什么打印出来是undefined，感觉返回值没有管用

function quchong2(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])==-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(quchong2(arr));

