/**
 * 非递归方法
 */

//深度优先遍DFS
//DFS就是从图中一个节点开始追溯，直到最后一个节点，然后回溯，继续追溯下一条路。
//DFS无法保证搜索的路径为最短路径，也不是搜索特定的路径，而是通过搜索来查看那些路径可选

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
/**
 *     1
 *   2   6
 *  3 4  7 8
 * 5 
 */
//感觉像根左右的遍历
//这个和那个shift是一样的，只不过这是使用pop和push，但是把子树放进去的顺序是不变的
function dfs(tree) {
  let stack = [tree];
  let res = [];
  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);
    let left = node.left;
    let right = node.right;
    if (right) stack.push(right);
    if (left) stack.push(left);
  }
  console.log(res);
  return res;
}
dfs(tree);//[1 2 3 5 4 6 7 8 ]


//先输出左子树中所有的左子树
function dfsLeft(tree) {
  let stack = [tree];
  let res = [];
  while (stack.length > 0) {
    let node = stack.pop();

    let left = node.left;
    let right = node.right;
    if (right) stack.push(right);
    if (left) {
      stack.push(left);
      res.push(left.val);
    }
  }
  console.log(res);
  return res;
}


dfsLeft(tree);//[ 2, 3, 5, 7 ]



//广度优先遍历BFS
//利用队列从根节点开始一次将左节点、右节点push到数组中

function bfs(node) {
  let queue = [node];
  let res = [];
  let count = 0;
  while (queue[count] && queue[count].val) {
    res.push(queue[count].val);
    let left = queue[count].left;
    let right = queue[count].right;
    if (left) {
      queue.push(left);
    }
    if (right) {
      queue.push(right);
    }
    count++;
    // console.log('queue:',queue);
    // console.log('```````````start```````````````')
    // console.log('left:', left);
    // console.log('left-----------------right')
    // console.log('right:', right);
    // console.log('````````````end``````````````')
  }
  console.log(res);
  return res;
}
bfs(tree);
// [
//   1, 2, 6, 3,
//   4, 7, 8, 5]

//遍历所有的左子树的数据
function bfsLeft(node) {
  let queue = [node];
  let res = [];
  let count = 0;
  res.push(node.val);
  while (queue[count] && queue[count].val) {
    let left = queue[count].left;
    let right = queue[count].right;
    if (left) {
      queue.push(left);
      res.push(left.val);
    }
    if (right) {
      queue.push(right);
    }
    count++;
    // console.log('queue:',queue);
    // console.log('```````````start```````````````')
    // console.log('left:',left);
    // console.log('left-----------------right')
    // console.log('right:',right);
    // console.log('````````````end``````````````')
  }
  console.log(res);
  return res;
}

bfsLeft(tree)//[ 1, 2, 3, 7, 5 ]

