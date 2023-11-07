/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const arr = [];
  let num = 0;
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  while (num < matrix.length * matrix[0].length) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
      num++;
    }
    if (num === matrix.length * matrix[0].length) break;
    top++;

    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
      num++;
    }
    if (num === matrix.length * matrix[0].length) break;
    right--;

    for (let i = right; i >= left; i--) {
      arr.push(matrix[bottom][i]);
      num++;
    }
    if (num === matrix.length * matrix[0].length) break;
    bottom--;

    for (let i = bottom; i >= top; i--) {
      arr.push(matrix[i][left]);
      num++;
    }
    if (num === matrix.length * matrix[0].length) break;
    left++;
  }
  return arr;
};
// @lc code=end
// 注意边界
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
