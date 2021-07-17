/**
 * 判断后续遍历是否是一颗二叉搜索树
 * 思路：
 * 1、后续遍历是左右根，所以最后一个元素是根元素
 * 2、遍历前面，截止到小于根元素的都是左子树
 * 3、截止到最后一个之前都是右子树
 * 4、遍历已知的左子树是否符合根大于左子树，小于右子树。
 * 5、左右子树都返回true时才是真正的二叉搜索树。
 */

function VerifySquenceOfBST(sequence) {

  if (sequence.length <= 0) return false;
  let length = sequence.length;

  let root = sequence[length - 1];
  let i = 0;
  console.log('length:', sequence, 'root:', root)
  for (; i < length - 1; i++) {
    if (sequence[i] > root) {
      break;
    }
  };

  for (let j = i; j < length - 1; j++) {

    if (sequence[j] < root) {
      return false;
    }
  }

  //判断左子树是否为 二叉搜索树
  let left = true;
  if (i > 0) {
    left = VerifySquenceOfBST(sequence.slice(0, i));
    // console.log('left', left);
  }
  let right = true;
  if (i < length - 1) {
    right = VerifySquenceOfBST(sequence.slice(i, - 1));
    // console.log('right', right, sequence.slice(i, -1));
  }


  return (left && right)
}

let arr = [5, 7, 6, 9, 11, 10, 8];
let arr2 = [7, 4, 6, 5];
// VerifySquenceOfBST(arr);
let res = VerifySquenceOfBST(arr2);
console.log(res);
/**
 * 写错的问题：在于我吧j的变量写错了，写成了i
 */