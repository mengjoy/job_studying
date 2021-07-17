/**
 * 删除链表中重复的数据,已排好序,不需要 重复的节点
 * 思路：
 * 1、使用两个指针，因为会有多个重复的元素，第一个指针指向正常点顺序，后一个指针初始值为第一个指针的下一个指针，
 * 然后下一个指针会根据重复数据的个数移动，如果第一个指针的下一个指向不等于第二个指针则数名又重复元素，改变第二个指针=第二个指针的next，
 * 第一个指针的next=第二个指针
 * 会直接删除 重复的元素
 * 
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

function deleteManyData(pHead) {

  var newHead = new Node('head');
  // //需要又一个新的head保存链表，
  newHead.next = pHead;
  //需要知道qhead 的和pehead之间有多少个重复数据
  var pHead = newHead;
  var qHead = pHead.next;
  while (qHead) {
    while ((qHead.next != null) && (qHead.val == qHead.next.val)) {
      qHead = qHead.next;
    }
    //没移动
    //说明没有重复的
    if (pHead.next == qHead) {
      pHead = qHead;
      qHead = qHead.next;

    }
    //移动了
    else {
      //如果有重复的，则让qhead等于他的下一个元素，phead的next等于qhead
      qHead = qHead.next;
      pHead.next = qHead;

    }

  }
  console.log(newHead.next)


}

let tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 5,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}

deleteManyData(tree);