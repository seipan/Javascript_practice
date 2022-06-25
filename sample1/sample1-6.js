let sum = 0;

while (true) {

  let value = +prompt("Enter a number", ''); //数字以外だとvalueに数字は入らない

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );