/**
 * 输出一棵树的深度和广度
 */

let tree = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null, }, right: null, },
  right: null
}



function treeWideAndtreeDeep(tree) {
  if (tree == null) return 0;

  let queue = [];
  queue.push(tree);

  let maxw = 1;
  let maxh = 0;

  while (true) {
    let len = queue.length;
    if (len == 0) {
      break;
    }
    while (len > 0) {
      let node = queue.shift();
      len--;
      if (node.left) {
        queue.push(node.left);

      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    maxh++;
    maxw = Math.max(maxw, queue.length);

  }
  console.log(maxw, maxh);
  return maxw;
}



treeWideAndtreeDeep(tree);


/**
 * 青蛙跳台阶
 */

function taijie(n) {
  let m = 0;
  let n1 = 1, n2 = 2;
  if (n == 0) {
    return m;
  }

  if (n == 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  for (let i = 3; i <= n; i++) {
    m = n1 + n2;
    n1 = n2;
    n2 = m;
  }
  console.log(m);
  return m;
}

taijie(5);
/**
 * 青蛙多个台阶的话
 * f(n)=f(n-1)+f(n-2)+f(n-3)+....f(1)
 * 思路：如果最后一个台阶跳一个台阶，那么有f(n-1)个方式，如果台阶跳两个，那么有f(n-2)以此类推，跳n-1个的有f(n-(n-1))
 */



