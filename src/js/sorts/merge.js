async function mergeSort(start = 0, end = collection.length) {
  if (end - start <= 1) return;

  const mid = Math.floor((start + end) / 2);
  await mergeSort(start, mid);
  await mergeSort(mid, end);
  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  const left = collection.slice(start, mid);
  const right = collection.slice(mid, end);
  let leftIndex = 0,
    rightIndex = 0,
    mainIndex = start;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      collection[mainIndex] = left[leftIndex];
      leftIndex++;
    } else {
      collection[mainIndex] = right[rightIndex];
      rightIndex++;
    }
    mainIndex++;
    renderCollection(); // Re-render after placing each element
    await new Promise((resolve) => setTimeout(resolve)); // Delay for visualization
  }

  while (leftIndex < left.length) {
    collection[mainIndex] = left[leftIndex];
    leftIndex++;
    mainIndex++;
    renderCollection();
    await new Promise((resolve) => setTimeout(resolve));
  }

  while (rightIndex < right.length) {
    collection[mainIndex] = right[rightIndex];
    rightIndex++;
    mainIndex++;
    renderCollection();
    await new Promise((resolve) => setTimeout(resolve));
  }
}
