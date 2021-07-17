//防抖函数
//高频函数触发后N秒内只会执行一次
//思路：当触发一个事件之后，每次出发时间都会将前一次触发事件的延时器关闭
function debounce(fun){
    let timeout=null;
    return function (){
        clearTimeout(timeout);
        timeout=setTimeout(()=>fun.call(this,arguments),500)
    }
}

//节流函数
//高频函数不断触发，但是n秒才触发一次
//思路：判断当前有没有触发事件，如果触发了事件，
//但是没执行说明当前触发是在n秒之内
//如果执行了，那么某个标志位应该是被改变的
function throttle(fun){
    let canRun=true;
    return function(){
        if(!canRun) return;
        canRun=true;
        setTimeout(()=>{
            fun.call(this,arguments);
            canRun=false;
        },)
    }
}



