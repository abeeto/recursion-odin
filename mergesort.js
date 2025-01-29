const mergesort = function (arr) {
  if (arr.length === 1) return arr;
  else {
    let left = mergesort(arr.slice(0, arr.length / 2));
    let right = mergesort(arr.slice(arr.length / 2, arr.length));
    let sortedArr = [];
    while (left[0] !== undefined || right[0] !== undefined) {
      if (left[0] === undefined) {
        sortedArr.push(right.shift());
      } else if (right[0] === undefined) {
        sortedArr.push(left.shift());
      } else if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return sortedArr;
  }
};

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergesort([105, 79, 100, 110]));
