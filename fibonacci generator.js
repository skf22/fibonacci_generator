// Arrow function to generate fibonacci sequence based on 2 inputs:
// an initial array (comprising 2 numbers) & the length of the proposed
// generated sequence.

let fibonacciGen = (init, length) => {
  let num1 = init[0], num2 = init[1], next, count = 2;

  while (count < length){
      next = num1 + num2;
      num1 = num2;
      num2 = next;

      init.push(next);
      count++;
  }
  return init;
}
