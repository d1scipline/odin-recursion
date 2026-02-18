function splitArray(array) {
  const middle = Math.floor(array.length / 2);
  var firstHalf = array.slice(0, middle);
  var secondHalf = array.slice(middle);
  return { firstHalf, secondHalf };
}

function merge(firstHalf, secondHalf) {
  var finalArray = [];

  while (firstHalf.length != 0 && secondHalf.length != 0) {
    if (firstHalf[0] >= secondHalf[0]) {
      finalArray.push(secondHalf.shift(0));
    } else {
      finalArray.push(firstHalf.shift(0));
    }
  }

  return finalArray.concat(firstHalf).concat(secondHalf);
}

function mergeSort(array) {
  let len = array.length;
  if (len <= 1) {
    return array;
  } else {
    const { firstHalf, secondHalf } = splitArray(array);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
