/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length == 0) return []
  const range = [];
  let currentNum = nums[0];
  for(let i=0; i< nums.length; i++) {
    // currentNum = nums[i];
    if(i+1 >=  nums.length) {
      if(nums[i] - currentNum >= 1) {
        range.push(`${currentNum}->${nums[i]}`)
      } else {
        range.push(String(nums[i]))
      }
      break;
    }
    if(nums[i+1] - nums[i] > 1) {
      if(nums[i] - currentNum >= 1) {
        range.push(`${currentNum}->${nums[i]}`)
      } else {
        range.push(String(nums[i]))
      }
      currentNum = nums[i+1];
    }
  }
  return range;
};
// @lc code=end

