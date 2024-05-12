const obj={
  age: 20,
  b: function(){
    return console.log(this.age);
  }
}

// const obj1={
//   age: 23
// }

// obj.b.call(obj1);

obj.b;