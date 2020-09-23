function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

//Non Recursive

function fibonacci(num) {
  let fibArr = [];
  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }
  return fibArr[num - 1];
}

//dynamic programming version with recursive
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
