const Will = {
  name: "Will Pennell",
  age: 21,
  education: "bsc",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};

Will.growOlder = function () {
  this.age += 1;
};

// this not preserved! Hello, my name is undefined
const referenceToGreet = Will.greet;

const referenceToGreet1 = Will.greet.bind(Will);

referenceToGreet1();
Will.greet();

//console.log(Will.age);
//Will.growOlder();
//console.log(Will.age);
//console.log(Will.doAddition(1, 2));
