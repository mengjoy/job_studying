/**
 * 实现一个继承
 */

function Boss() {

}

function Base() {
  Boss.call(this);//base继承了boss
}

Object.setPrototypeOf(Boss.prototype, Base.prototype)

/**
 * 实现一个new
 */

function _new(fun, ...args) {
  if (typeof fun !== 'function') {
    return new Error('参数必须是一个函数');
  }

  let obj = Object.create(fun.prototype);
  let res = fun.call(obj, ...args);
  if (res != null && (typeof res == 'object' || typeof res == 'function')) {
    return res;
  }

  return obj;
}

/**
 * 实现一个instaceof
 */

function _instanceof(a, b) {
  while (a) {
    if (a.__proto__ == b.protottype) {
      return true;
    }
    a = a.proto__;
  }
  return false;
}

/**
 * 手写jsonp的实现
 */

