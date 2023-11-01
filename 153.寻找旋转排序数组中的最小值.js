/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length -1
  while(left < right) {
    let mid = Math.floor((left + right)/2)
    if (nums[mid] > nums[right]) { // 判断哪边是有序的
      left = mid + 1; // 将范围缩小到无序的那一半，因为答案就在那一半。之所以要+1，是因为mid肯定不是最小的那个，至少nums[right]比nums[mid]更小
    } else {
      right = mid; // 这里直接取mid，因为此时mid的左边（包含）是不完全有序的那一半，mid有可能直接是最小值，所以要取mid
    }
  }
  return nums[right]; // right = left
};
// @lc code=end

