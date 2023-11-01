/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const arr = [];
  for(let i = 0; i < matrix[0].length ; i++) {
    const item = [];
    for(let y = matrix.length-1; y >= 0; y--) {
      item.push(matrix[y][i])
    }
    arr.push(item)
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let y = 0; y < matrix[0].length; y++) {
      matrix[i][y] = arr[i][y];
    }
  }
};
// @lc code=end
rotate([[1,2,3],[4,5,6],[7,8,9]])
