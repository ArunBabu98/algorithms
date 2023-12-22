function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      var temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j = j - 1;
    }
  }
  return array;
}

console.log(insertionSort([5, 9, 1, 4, 2]));
console.log(insertionSort([100, 4783, 1, 390, 22]));
console.log(insertionSort([35, 43, 1, 9, -2]));
