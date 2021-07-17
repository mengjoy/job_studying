/**
 * 输出一个树的最左节点
 */

/**
 *     1
 *   2   3
 * 4  5 6
 *  7
 * 
 * =>1 2 4 7
 */

let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: {
        val: 7,
        left: null,
        right: null
      }
    },
    right: {
      val: 5,
      left: null,
      right: null,
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null
  }
}
function consoleLeft(tree) {
  let val = [];
  let childlist = [];
  childlist.push(tree);

  while (childlist.length > 0) {
    let tmp = childlist.pop();
    val.push(tmp.val);
    if (tmp.left) {
      childlist.push(tmp.left);
    } else if (tmp.right) {
      childlist.push(tmp.right);
    }


  }
  console.log(val)
  return val;
}
consoleLeft(tree);