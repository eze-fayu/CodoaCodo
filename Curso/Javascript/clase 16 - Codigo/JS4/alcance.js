//let y const son locales al bloque donde fueron declaradas

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y no es visible desde aqui
console.log(x + z);
// → 40