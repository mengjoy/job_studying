/**
 * 返回链表的弟k个元素
 * 1、使用双指针法来输出，
 * 2、也可以使用数组保存数据，然后输出
 */

let tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null,
              }
            }
          }
        }
      }
    }
  }
}

function searchKNode(node, k) {
  let head = node;
  let end = node;

  for (let i = 0; i < k; i++) {
    end = end.next;
  }
  while (end.next != null) {
    head = head.next;
    end = end.next;
  }

  return head.val;
}

searchKNode(tree, 3)