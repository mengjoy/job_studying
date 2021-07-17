function Person(name) {
  this.name = name;
  this.show1 = () => {
    console.log(this.name);
  }
}

let a = new Person('a');
let b = new Person('b');

a.show1();
b.show1();
console.log(a);