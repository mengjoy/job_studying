/**
 * 输出二叉树中最小的k节点
 * 二叉搜索树本身的特性：根节点大于左孩子，小于右孩子
 *思路：
 *将数据按照顺序输出，然后找到最小的k或者最大k。
 */



let tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    }
  },
  right: {
    val: 6,
    left: null,
    right: null,
  }
}

let arr = function (tree, k) {
  let result = [];
  function returnKTree(tree, k) {
    if (tree == null) return null;
    let node = tree;

    if (node.left) {
      returnKTree(node.left);
    }
    result.push(node.val)
    if (node.right) {
      returnKTree(node.right);
    }

  }
  returnKTree(tree, k)
  console.log(result[k]);
}
arr(tree, 2)