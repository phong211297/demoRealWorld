let a = { name: 'Duong', age: 18 };

() => {
  this.a = this.a + 'Ngu';
}

change(a);

console.log(a); //
