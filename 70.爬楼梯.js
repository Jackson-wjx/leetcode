/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 该问题可以拆分为 fn = f1 + f（n-1）
  if (n === 1) return 1;
  if (n === 2) return 2;
  let f1 = 1;
  let f2 = 2;
  let fn = 0;
  for (let i = 3; i <= n; i++) {
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
  }
  return fn;
};
// @lc code=end

