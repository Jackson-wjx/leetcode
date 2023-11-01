/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let eqlNum = 0;
  let length = nums.length;
  for(let i = 0; i< length - eqlNum; i++) {
    if(nums[i] == val) {
      eqlNum++;
      nums.splice(i, 1);
      i--;
      nums.push(val);
    }
  }
  return length - eqlNum;
};
// @lc code=end

