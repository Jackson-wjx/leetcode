/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let flag = false; // 开始计算字符数的标记
  let len = 0;
  for(let i = s.length - 1; i >= 0 ; i--) {
    if(s[i] !== ' ' && flag) {
      len++;
    }
    if(s[i] == ' ' && flag) {
      break;
    }
    if(s[i] !== ' ' && !flag) {
      flag = true;
      len++;
    }
  }
  return len;
};
// @lc code=end
lengthOfLastWord('Hello World')
