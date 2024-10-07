class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
  }
}

const will = new Person("Will Pennell", 21);
will.greet();

const adam = new Person("Adam Pennell", 18);
adam.greet();
