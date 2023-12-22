function selectionSort(array) {
  for (var j = 0; j < array.length - 1; j++) {
    var min = j;
    for (var i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    if (min != j) {
      var temp = array[j];
      array[j] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

console.log(selectionSort([5, 9, 1, 4, 2]));
console.log(selectionSort([100, 4783, 1, 390, 22]));
console.log(selectionSort([35, 43, 1, 9, -2]));
