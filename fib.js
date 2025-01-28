// iterative
const fibs = function (n) {
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
};
console.log(fibs(8));

const fibsRec = function (index, fibArr = [0, 1]) {
  if (fibArr[index - 1]) {
    fibArr[index] = fibArr[index - 1] + fibArr[n - 2];
    return fibArr[index];
  }
  return fibs(index, fibArr);
};

console.log(fibsRec(20));
