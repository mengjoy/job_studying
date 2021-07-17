Function.prototype.bind = fucntion(context, ...bindArgs){
  //func是调用bind的原函数
  const func = this;
  context = context || window;

  if (typeof func != 'function') {
    throw new TypeError('bind must be called on a function');
  }

  return function (...callArgs) {
    let args = bindArgs.concat(callArgs);
    if (this instanceof func) {
      return new func(...args);
    }

    return func.call(context, ...args);
  }

}