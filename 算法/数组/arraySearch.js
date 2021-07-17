/**
 * 二位数组中的查找
 * 剑指offer数组题
 */

 let twoArr=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

 function searchNum(num,arr){
     let i=0,j=arr[0].length-1;
     let flag=false;
     while(!flag&&i<arr.length&&j>0){
         if(arr[i][j]==num){
            flag=true;
         }else if(arr[i][j]>num){
             j--;
         }else if(arr[i][j]<num){
             i++;
         }
     }
     console.log(flag);
 }

 searchNum(18,twoArr);