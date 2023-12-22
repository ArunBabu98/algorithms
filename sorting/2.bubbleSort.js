function bubbleSort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 9, 1, 4, 2]));
console.log(bubbleSort([100, 4783, 1, 390, 22]));
console.log(bubbleSort([35, 43, 1, 9, -2]));
