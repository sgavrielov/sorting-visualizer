async function bubbleSort() {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - i - 1; j++) {
      if (collection[j] > collection[j + 1]) {
        await swap(j, j + 1);
      }
    }
  }
}
