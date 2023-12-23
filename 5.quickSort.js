// pivot selection , leftmost, rightmost, best of 3 and random

function selectPivot(array, pivotSelect) {

}

function quickSort(array, pivotSelect) {
  pivotindex = partition(array, pivotSelect);
  
}

console.log("Pivot is leftmost");
console.log(quickSort([5, 9, 1, 4, 2]), "leftmost");
console.log(quickSort([100, 4783, 1, 390, 22]), "leftmost");
console.log(quickSort([35, 43, 1, 9, -2]), "leftmost");

console.log("Pivot is rightmost");
console.log(quickSort([5, 9, 1, 4, 2]), "rightmost");
console.log(quickSort([100, 4783, 1, 390, 22]), "rightmost");
console.log(quickSort([35, 43, 1, 9, -2]), "rightmost");

console.log("Pivot is best of 3");
console.log(quickSort([5, 9, 1, 4, 2]), "bestof3");
console.log(quickSort([100, 4783, 1, 390, 22]), "bestof3");
console.log(quickSort([35, 43, 1, 9, -2]), "bestof3");

console.log("Pivot is random");
console.log(quickSort([5, 9, 1, 4, 2]), "random");
console.log(quickSort([100, 4783, 1, 390, 22]), "random");
console.log(quickSort([35, 43, 1, 9, -2]), "random");
