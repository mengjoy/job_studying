/**
 * 从尾到头打印链表
 *  function ListNode(){
        this.val=val;
        this.next=Listnode;
    }
 */

 let node={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:{
                        val:6,
                        next:null,
                    }
                }
            }
        }
    }
 }

function consoleList(node){
    let arr=[];
    if(!node){
        console.log('');
    }

    while(node){
        arr.unshift(node.val);
        node=node.next;
    }
    console.log(arr);
}

function consoleList2(node){
    if(!node){
        console.log('');
    }

   if(node.next!==null){
       consoleList2(node.next);
    }
    console.log(node.val);
}

console.log(consoleList2(node));
