const fibInput = document.querySelector(".fib-input");
const fibOutput = document.querySelector(".fib-output");
const fibButt = document.querySelector(".fib-butt");
const fibRInput = document.querySelector(".fibR-input");
const fibROutput = document.querySelector(".fibR-output");
const fibRButt = document.querySelector(".fibR-butt");
const mergeSortInput = document.querySelector(".mS-input");
const mergeSortOutput = document.querySelector(".mS-output");
const mergeSortResult = document.querySelector(".mS-results");
const mergeSortButton = document.querySelector(".mS-butt");
const stat = document.querySelector(".status");

fibButt.addEventListener("click", getFib);
fibRButt.addEventListener("click", getFibR);
//fibonacci loop
function getFib() {
  fibOutput.textContent = fibs(fibInput.value);
}

function fibs(num) {
  let arr = [0, 1];

  if (num <= 0) {
    return "Must be greater than 0";
  } else if (num <= 1) {
    return "0";
  } else if (num <= 2) {
    return "0,1";
  } else {
    for (let i = 2; i <= num - 1; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

//fibonacci recursion
function getFibR() {
  fibROutput.textContent = fibsR(fibRInput.value);
}

function fibsR(num) {
  if (num <= 0) {
    return "Must be greater than 0";
  } else if (num <= 1) {
    return [0];
  } else if (num <= 2) {
    return [0, 1];
  } else {
    return [
      ...fibsR(num - 1),
      fibsR(num - 1)[num - 2] + fibsR(num - 1)[num - 3],
    ];
  }
}

//mergeSort

mergeSortInput.addEventListener("change", addValues);
let arr = [];
mergeSortButton.addEventListener("click", mergeSortInit);

function addValues() {
  mergeSortOutput.innerHTML = "";
  arr = [];

  for (let i = 1; i <= mergeSortInput.value; i++) {
    const div = document.createElement("div");
    div.textContent = randomValue();
    arr.push(div.textContent);
    mergeSortOutput.appendChild(div);
  }
}

function randomValue() {
  return Math.floor(Math.random() * 100);
}

function mergeSortInit() {
  mergeSortResult.textContent = mergeSort(arr);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const half = Math.ceil(arr.length / 2);

  let arrA = arr.slice(0, half);
  let arrB = arr.slice(half);

  return merge(mergeSort(arrA), mergeSort(arrB));
}

function merge(left, right) {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    if (parseInt(left[0]) < parseInt(right[0])) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}
