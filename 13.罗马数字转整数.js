/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let total = 0;
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for(let i = 0; i < s.length; i++) {
    if(i + 1 < s.length) {
      // 右边不越界
      if(romanNums[s[i]] >= romanNums[s[i+1]]) {
        // 左大右小，正常累加
        total += romanNums[s[i]]
      } else {
        total -= romanNums[s[i]]
      }
    } else {
      // 最后一个字符了
      total += romanNums[s[i]]
    }
  }
  return total;
};
// @lc code=end

