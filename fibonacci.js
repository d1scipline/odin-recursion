function fibonacciIterative(n) {
  let a = 0;
  let b = 1;
  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

function fibsRec(n) {
  let sequence = [];
  if (n <= 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }
  sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
}

console.log(fibonacciIterative(8));
console.log(fibsRec(8));
