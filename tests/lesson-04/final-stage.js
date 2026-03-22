let count = 0;
const resultFindNumber = [];

for (let i = 1; i <= 100; i++) {
  for (let j = i; j <= 100; j++) {
    if ((i + j) % 17 === 0) {
      count++;
      resultFindNumber.push(`(${i}, ${j})`);
    }
  }
}

console.log(count, resultFindNumber);
