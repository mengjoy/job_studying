async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2(){
    console.log('async2'); 
}

console.log('script start');

setTimeout(()=>console.log('setimout'));

async1();

new Promise((resolve)=>{
    console.log('propmise1');
    resolve();
}).then(()=>console.log('promise2'))

console.log('script end');

//任务队列
//JS分为同步任务和异步任务，同步任务在主线程上执行，形成一个执行栈
//主线程之外还有一个任务队列，任务队列有宏任务和微任务。
//宏任务是每次只执行一个，但是每次之前一个宏任务之后，在执行下一个宏任务之前，将会把所有的微任务执行完
//执行一个宏任务，过程遇到微任务将微任务添加到任务队列中，宏任务执行完毕，立即执行当前微任务队列中的所有微任务，宏任务执行完毕之后，开始检查渲染，然后GUI线程接管渲染。渲染完毕后,JS线程继续接管，开始下一个宏任务。
//macrotask:script setTimout setIntervl I/O UI交互 postMessage MessageChannel setImmediate
//microtask:Promise.then MutainObserver Process.nextTick
//promise和async中的立即执行
//await发生了什么：它是一个让出线程的标志，await后面的表达式会先执行一遍，将await后面的代码加到microtask中，然后跳出执行的函数，继续执行async下面的东西

//promise本身是同步的立即执行函数，resolve、reject时才会是异步操作，当主栈完成后才会调用resolve/reject.
//promise.then()的回到是一个task
//async函数返回一个promise对象，先执行await里面的函数，然后将后面的语句放到队列里面

