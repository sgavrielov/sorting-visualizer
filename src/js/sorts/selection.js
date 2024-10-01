async function selectionSort() {
  for (let i = 0; i < collection.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < collection.length; j++) {
      if (collection[j] < collection[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      await swap(i, minIndex);
    }
  }
}
