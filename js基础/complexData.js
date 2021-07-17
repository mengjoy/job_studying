function test(person) {
  person.age = 26
  person = {
    name: 'hzj',
    age: 18
  }
  return person
}
const p1 = {
  name: 'fyq',
  age: 19
}
const p2 = test(p1)
console.log(p1) // { name: 'fyq', age: 26 }
console.log(p2) // { name: 'hzj', age: 18 }
/**
 * 原因：
 * 在传递的过程中，传进去的是引用地址，改变了person的age的值，然后销毁了这个传进来的引用地址，然后重新赋值了新的指向并返回。这就是p2。
 */
