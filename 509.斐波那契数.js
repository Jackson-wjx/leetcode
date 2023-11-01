/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let a = 0;
  let b = 1;
  for(let i = 0; i < n; i++) {
    [a, b] = [b, a+b]
  }
  return a;
};
// @lc code=end

