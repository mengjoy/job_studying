/**
* 继承的方式
*/

/**
 * 1、原型链继承
 * 原型让一个引用类型继承另一个引用类型的属性和方式
 */
function SubType() {
  this.type = 'sub';
  this.colors = ['red']
}

function SuperType() {
  this.type = 'super'
}
SuperType.prototype.sayType = function () {
  console.log('super');
}

// SubType.prototype = new SuperType();
// var instance = new SubType();
// instance.colors.push('green')
// console.log(instance.colors) red green
// // instance.sayType();
// let ins2 = new SubType();
// console.log(ins2.colors)  red

/**
 * 2、借用构造函数进行继承
 * 自类型构造七函数内部调用超类型构造函数。通过apply，call在新创建的对象上执行构造函数
 */

function Parent() {
  this.colors = ['red']
}

function Child() {
  Parent.call(this)
}

let instance1 = new Child();
instance1.colors.push('green');
// console.log(instance1.colors)
let instance2 = new Child();
// console.log(instance2.colors)


/**
 * 3、组合继承
 * 将原型链和构造函数的技术组合到一起，
 * 背后思路是使用原型链实现对（原型属性和方法）的继承，而通过借用构造函数实现对（实例属性）的继承。
 */

function Dad(name) {
  this.name = name;
  this.colors = ['red'];
}
Dad.prototype.sayName = function () {
  console.log(this.name);
}

function Dau(name) {
  Dad.call(this, name)
  this.age = 16;
}

Dau.prototype = new Dad();
// Dau.prototype.constructor = Dau;

Dau.prototype.sayAge = function () {
  console.log('age', this.age);
}

let in1 = new Dau('dawei');
console.log(in1.name, Dau.prototype.constructor == Dad);//dawei true

/**
 * 4、原型式继承
 * 借助原型可以基于已有的对象创建新的对象
 */

function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

//ES5实现了这个方法，Object.create(obj)




