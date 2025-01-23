'use strict';
function fib(n) {
  // フィボナッチ数列
  // 0番目は 0 を返すルール
  if (n === 0) return 0
  // 1番目は 1 を返すルール
  if (n === 1) return 1
  // n番目の値を求める
  return fib(n - 1) + fib(n - 2)
}

const length = 40
for (let i = 0; i <= length; i++) {
  console.log(fib(i))
}