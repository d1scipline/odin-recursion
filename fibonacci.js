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
