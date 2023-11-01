/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const hashMap = {};
  for(let i = 0; i < nums.length; i++ ) {
    if(hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]] += 1;
      if(hashMap[nums[i]]> 2) {
        nums.splice(i, 1)
        i--;
      }
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  return nums.length;
};
// @lc code=end

