// []

const arr1 = [1, 2, 3];
const arr2 = [5];

let test = { 1: 1 };

function same(arr1, arr2) {
  for (let a of arr1) {
    console.log(test[a]);
    console.log(test[a] || 0);
    console.log((test[a] || 0) + 1);
    test[a] = (test[a] || 0) + 1;
  }
}

console.log(test);

console.log(same(arr1, arr2));
