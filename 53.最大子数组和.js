/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const n = nums.length;
  const dp = new Array(n);
  // 以 nums[i] 为结尾的「最大子数组和」为 dp[i]
  // dp[i] 有两种「选择」，要么与前面的相邻子数组连接，形成一个和更大的子数组；要么不与前面的子数组连接，自成一派，自己作为一个子数组。
  dp[0] = nums[0];
  // 状态转移方程
  for(let i = 1; i<n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i-1])
  }

  let res = nums[0];
  for(let i = 0; i<n; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end

