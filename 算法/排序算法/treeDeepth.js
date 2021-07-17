/**
 * 二叉树的最大深度
 *
 */

function treeDeepth(tree) {
  if (tree == null) return 0;
  let nLeft = treeDeepth(tree.left);
  let nRight = treeDeepth(tree.right);

  return nLeft > nRight ? (nLeft + 1) : (nRight + 1);

}


let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 5,
        left: null,
        right: null,
      },
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
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  }
}

treeDeepth(tree)