//旋转数组
/**
 * [3,4,5,1,2]=>[1,2,3,4,5]求最小数字
 */

function min(arr) {
  let i = 0, j = arr.length - 1, mid = 0;

  while (arr[i] >= arr[j]) {
    if (j - i == 1) {
      mid = j;
      break;
    }

    mid = (i + j) / 2;

    if (arr[i] == arr[mid] && arr[mid] == arr[j]) {
      return order(arr, i, j);
    }

    if (arr[mid] > arr[i]) {
      i = mid;
    }

    if (arr[mid] < arr[j]) {
      j = mid;
    }
  }

  return arr[mid];
}

function order(arr, i, j) {
  let min = arr[i];

  for (let tmp = i; tmp < j; tmp++) {
    if (min > arr[tmp]) {
      min = arr[tmp];
    }
  }
  return min;
}

let arr = [3, 4, 5, 1, 2];
let arr2 = [1, 0, 1, 1, 1];
// console.log(min(arr));
console.log(min(arr2));

function minNumberInRotateArray(rotateArray)
{
    let i=0,j=rotateArray.length-1;
    let mid=0;

    while(rotateArray[i]>=rotateArray[j]){
        if(j-i==1){
            mid=j;
            break;
        }
        mid=(i+j)/2;
        if(rotateArray[i]==rotateArray[mid]&&rotateArray[mid]==rotateArray[j]){
            order(rotateArray,i,j);
        }

        if(rotateArray[i]<rotateArray[mid]){
            i=mid;
        }

        if(rotateArray[j]>rotateArray[mid]){
            j=mid;
        }
    }

    return rotateArray[mid];
}

function order(arr,i,j){
    let min=arr[i];
    for(let tmp=i+1;tmp<j;tmp++){
        if(min>arr[tmp]){
            min=arr[tmp];
        }
    }
    return min;
}