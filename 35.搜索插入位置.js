/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let length = nums.length;
  let left = 0;
  let right = length;
  let mid = Math.floor(length/2);
  while(left < right) {
    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      left = mid + 1;
      mid = Math.floor((left  + right)/2);
    } else {
      right = mid;
      mid =  Math.floor((left  + right)/2);
    }
  }
  return mid;
};
// @lc code=end
searchInsert([1,3,5,6], 2)
/** 
首先，确定要查找的目标值。
将查找范围缩小到数组的中间元素。
如果中间元素等于目标值，查找成功，返回索引。
如果中间元素大于目标值，则在中间元素的左侧继续查找。
如果中间元素小于目标值，则在中间元素的右侧继续查找。
重复步骤2至5，直到找到目标值或查找范围为空。
二分查找的时间复杂度为O(logN)，其中N是数组的元素个数。由于每次都将查找范围减半，所以其效率非常高。

值得注意的是，二分查找要求待查找的数组必须是有序的。如果数组无序，需要先进行排序操作，然后再进行二分查找。
**/
// 注意边界缩小时要加一
