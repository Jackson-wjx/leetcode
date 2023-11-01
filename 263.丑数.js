/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  //任意一个大于 1 的自然数，要么它本身就是质数，要么它可以分解为若干质数的乘积。
  if (n <= 0) return false;
  // 如果 n 是丑数，分解因子应该只有 2, 3, 5
  while (n % 2 == 0) n /= 2;
  while (n % 3 == 0) n /= 3;
  while (n % 5 == 0) n /= 5;
  // 如果能够成功分解，说明是丑数
  return n == 1;
};
// @lc code=end