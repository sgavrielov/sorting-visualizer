const collection = [];
const size = 100; // min 10, max 400
const animationDelay = 10;
let sortedValue = null;

generateCollection(size);

function generateCollection(size) {
  collection.length = 0;
  for (let i = 0; i < size; ++i) {
    collection.push(Math.floor(Math.random() * 100) + 1);
  }
  renderCollection();
}

function renderCollection() {
  const collectionContainer = document.getElementById("bars");
  collectionContainer.innerHTML = "";
  collection.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.style.height = `${value * 3}px`;
    bar.classList.add("bar");
    collectionContainer.appendChild(bar);
  });
}

async function swap(i, j) {
  const temp = collection[i];
  collection[i] = collection[j];
  collection[j] = temp;
  renderCollection();
  await new Promise((resolve) => setTimeout(resolve, animationDelay));
}

// Control the sorting process
async function startSorting(method) {
  switch (method) {
    case "bubble":
      await bubbleSort();
      break;
    case "insertion":
      await insertionSort();
      break;
    case "selection":
      await selectionSort();
      break;
    case "merge":
      await mergeSort();
      renderCollection(); // Final re-render after sorting
      break;
  }
}
