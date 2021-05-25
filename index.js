const map = (arr, callback) => {
  let newArr = new Array();
  for (const val of arr) {
    newArr.push(callback(val));
  }
  return newArr;
};

const reduce = (arr, callback, start) => {
  let total = !!start ? start : arr[0];
  let i = !!start ? 0 : 1;
  for (; i < arr.length; i++) {
    total = callback(arr[i], total);
  }
  return total;
};
