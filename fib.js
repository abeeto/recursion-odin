// iterative
const fibs = function (n) {
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
};
console.log(fibs(8));

const fibsRec = function (n, index = 2, fibArr = [0, 1]) {
  if (index === n) {
    return fibArr;
  }
  fibArr[index] = fibArr[index - 1] + fibArr[index - 2];
  return fibsRec(n, index + 1, fibArr);
};

console.log(fibsRec(8));
