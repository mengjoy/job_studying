/**
 * 从上倒下打印一棵树，从左到右，一层一层
 */

function consoleTreeFromTopToBottom(tree) {
  if (!tree) return;
  let node = tree;
  let childList = [];
  let val = [];
  childList.push(node);


  while (childList.length > 0) {
    let ele = childList.shift();

    val.push(ele.val);
    if (ele.left) {
      childList.push(ele.left);
    }

    if (ele.right) {
      childList.push(ele.right);
    }

  }

  console.log(val)
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


consoleTreeFromTopToBottom(tree);