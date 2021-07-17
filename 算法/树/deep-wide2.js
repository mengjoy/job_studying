/**
 * 树的遍历方法，广度优先遍历，深度优先遍历
 *      1
 *    2    3
 *  4   5  
 *   6 7
 * 
 * 树的前序遍历：根左右，会先遍历根节点，然后遍历左子树 1 2 4 6 5 7 3
 * 树的中序遍历：左根右，会先遍历左子树，然后遍历根和右子树 4 6 2 7 5 1 3
 * 树的后序遍历：左右根，6 4 7 5 2 3 1
 * 深度优先遍历：
 * 广度优先遍历：1 2 3 4 5 6 7
 */
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    right: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

/**
 *      1
 *    2   3
 *  4   5 
 *   6 7
 */
/**
 * 左根右，中序遍历
 */
let ldrarr = [];
function LDR(tree) {
  let node = tree;

  if (node != null) {
    LDR(node.left);
    ldrarr.push(node.val);
    LDR(node.right)
  }
}

LDR(tree);
console.log(ldrarr);
/**
 * [
  4, 6, 2, 7,
  5, 1, 3
]
 */

/**
 * 根左右，前序遍历
 */
let dlrarr = []
function DLR(tree) {
  let node = tree;
  if (node != null) {
    dlrarr.push(node.val);
    DLR(node.left);
    DLR(node.right)
  }

}

DLR(tree);
console.log(dlrarr)
/**
 * [
  1, 2, 4, 6,
  5, 7, 3
]
 */
/**
 * 
 * 后续遍历就是吧console放在最后面指样子。
 */
let lrdarr = []
function LRD(tree) {
  let node = tree;
  if (node != null) {
    LRD(node.left);
    LRD(node.right)
    lrdarr.push(node.val);
  }
}

LRD(tree);
console.log(lrdarr);
/**
 * [
  6, 4, 7, 5,
  2, 3, 1
]
 */

/**
 * 深度优先的递归遍历
 * 查找嘴底层的一个元素。然后在找他其他的兄弟元素的最深层，然后再回到公共父元素，然后再去遍历父元素的兄弟元素
 */

function deep(tree) {
  let node = tree;
  let nodelist = []
  let childs = []
  if (node != null) {
    nodelist.push(node.val);

    if (node.left) {
      childs.push(node.left);
    }
    if (node.right) {
      childs.push(node.right);
    }
    for (let i = 0; i < childs.length; i++) {
      deep(childs[i]);
    }
  }
  console.log(nodelist);

}

deep(tree);// 6 4 7 5 2 3 1

/**
 *广度优先遍历
 *非递归实现：
 *1、用一个数组保存所有的节点
 *2、按照根节点，然后左孩子，右孩子，再是左孩子的左右孩子，再是右孩子的左右孩子
 *3、所以想到nodes是全局庄节点的数组，queue队列数组作为一个局部数组保存 当前节点的左右孩子，然后进行遍历，看左右孩子有没有孩子
 */

function wide(tree) {
  let nodes = [];
  if (tree != null) {
    let queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      let item = queue.shift();
      nodes.push(item.val);
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    console.log(nodes);
  }
}

wide(tree)//1 2 3 4 5 6 7




