/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  const pattern = /^[a-zA-Z0-9]+$/
  while (start < end) {
    let left, right;
    if(pattern.test(s[start])) {
      left = s[start].toLowerCase();
    } else {
      start++;
      continue;
    }
    if(pattern.test(s[end])) {
      right = s[end].toLowerCase();
    } else {
      end--;
      continue;
    }
    if(left === right) {
      start++;
      end--;
      continue;
    } else {
      return false;
      break;
    }
  }
  return true;
};
// @lc code=end
isPalindrome("A man, a plan, a canal: Panama")
