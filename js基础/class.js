/**
 * ES5实现class
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return '(' + this.name + ',' + this.age + ')';
  }
}

//constructor:构造方法，this关键字代表实例对象，






/**
 * 首先明白new操作符做了什么
 * 1、new object
 * 2、将新的对象和当前对象链接起来，继承属性
 * 3、改变this的指向
 * 4、返回这个对象
 */

let Parent = function (name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.say = function () {
  console.log(this.name);
}

let newSelf = function (Parent, ...rest) {
  let child = Object.create(Parent.proptotype);
  let result = Parent.apply(child, rest);

  return result == 'object' ? result : child;
}