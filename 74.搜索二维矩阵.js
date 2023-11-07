/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const matrixFlat = [].concat(...matrix);
  const binarySearch = (arr, tar) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(right / 2);
    while(left <= right ) {
      if(arr[mid] === tar) {
        return true;
      } else if (arr[mid] < tar) {
        left = mid + 1;
        mid = Math.floor((left + right) / 2);
      } else {
        right = mid - 1;
        mid = Math.floor((left + right) / 2);
      }
    }
    return false;
  }
  return binarySearch(matrixFlat, target);
};
// @lc code=end
searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
// 简单解法
// var searchMatrix = function(matrix, target) {
//   for(let i=0; i< matrix.length; i++) {
//     if(matrix[i].includes(target)) {
//       return true;
//     }
//   }
//   return false;
// };

/**
 * 当我们更新左边界时，将 left 移动到 mid 的右侧，是因为我们已经确定目标元素不在 mid 的左侧。如果我们将 left 设置为 mid，那么下一次迭代时，只会在原来的区间中重复搜索，导致进入无限循环。所以为了避免这种情况，我们将 left 设置为 mid + 1，确保在新的区间内进行搜索。

而更新右边界时不需要进行 -1 的操作是因为在取中间元素时，我们是向下取整的，保证右边界不包括中间元素。如果在更新右边界时使用 right = mid - 1，那么当前轮中间元素可能会被排除在搜索范围之外，造成错误的结果。因此，更新右边界时直接将右边界设置为中间元素即可。
 */

const binarySearch = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while(left < right ) {
    if(arr[mid] === tar) {
      return true;
    } else if (arr[mid] < tar) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else {
      right = mid;
      mid = Math.floor((left + right) / 2);
    }
  }
  return false;
}