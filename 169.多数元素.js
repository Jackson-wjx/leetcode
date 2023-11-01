/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashMap = new Map;
  for(let i=0; i<nums.length; i++) {
    hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1)
  }
  for(const [key, value] of hashMap) {
    if(value > nums.length / 2) {
      return key;
    }
  }
};
// @lc code=end

