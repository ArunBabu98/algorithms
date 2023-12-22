function merge(a, b) {
  var c = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      c.push(b[0]);
      b.splice(0, 1);
    } else {
      c.push(a[0]);
      a.splice(0, 1);
    }
  }
  while (a.length > 0) {
    c.push(a[0]);
    a.splice(0, 1);
  }
  while (b.length > 0) {
    c.push(b[0]);
    b.splice(0, 1);
  }
  return c;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  var mid = Math.floor(array.length / 2);
  var arrayone = array.slice(0, mid);
  var arraytwo = array.slice(mid, array.length);
  arrayone = mergeSort(arrayone);
  arraytwo = mergeSort(arraytwo);
  return merge(arrayone, arraytwo);
}

console.log(mergeSort([5, 9, 1, 4, 2]));
console.log(mergeSort([100, 4783, 1, 390, 22]));
console.log(mergeSort([35, 43, 1, 9, -2]));
