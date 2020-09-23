// o(n), o(1)
function averagePair(arr, avg) {
  //check array is empty
  if (arr.length === 0) return false;
  //initialize left and right
  let left = 0;
  let right = arr.length - 1;

  //loop through array to check average
  while (left < right) {
    let tempAvg = (arr[left] + arr[right]) / 2;
    // console.log(tempAvg);
    if (tempAvg === avg) {
      return true;
    } else if (tempAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
