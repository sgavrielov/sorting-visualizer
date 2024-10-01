async function insertionSort() {
  for (let i = 1; i < collection.length; i++) {
    let key = collection[i];
    let j = i - 1;
    while (j >= 0 && collection[j] > key) {
      await swap(j, j + 1);
      j--;
    }
    collection[j + 1] = key;
    renderCollection(); // Re-render after inserting
  }
}
