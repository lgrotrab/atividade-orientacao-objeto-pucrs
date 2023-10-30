let a = [];
a[0] = Math.random();

console.log(a.length);
for (let i = 0; i < a.length; i++) {
  console.log("Array a Elemento " + i + "= " + a[i]);
}
a[9] = Math.random();
for (let i = 0; i < a.length; i++) {
  console.log("Array a Elemento " + i + "= " + a[i]);
}

a.push(Math.random());
for (let i = 0; i < a.length; i++) {
  console.log("Array a Elemento " + i + "= " + a[i]);
}
