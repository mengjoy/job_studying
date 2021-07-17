//递归实现
function deepCopy(obj){
    let newObj={};
    for (let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
          if(typeof obj[key]==='Object' ){
              newObj[key]=deepCopy(obj[key])
          }else{
              newObj[key]=obj[key];
          } 
        }
    }
    return newObj; 
}

//JSON实现
function deepCopy2(obj){
  let newObj=JSON.parse(JSON.stringify(obj));
  console.log(newObj);
  return newObj;
}


let obj={a:1,b:[1,2]};
let newObj=deepCopy(obj);

let newo=deepCopy2(obj);
newo.b.push(3);
console.log(obj,newo)


