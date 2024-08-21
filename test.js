const data = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const a = (data) => {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    const currentVal = map[data[i]];
    console.log(currentVal);
    const nextVal = map[data[i + 1]];

    if (nextVal && currentVal < nextVal) {
      // Subtract if the current value is less than the next value (e.g., IV = 4)
      sum -= currentVal;
    } else {
      // Otherwise, add the current value
      sum += currentVal;
    }
  }

  return sum;
};

console.log(a("IV")); // Output: 4
console.log(a("MCMXCIV")); // Output: 1994
