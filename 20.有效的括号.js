/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [''];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let i = 0; i < s.length; i++) {
    let last = stack[stack.length - 1];
    if ([')', ']', '}'].includes(s[i])) {
      // 判断有没有
      if (['(', '[', '{'].includes(last)) {
        // 判断是否匹配
        if (map[s[i]] === last) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 1;
};
// @lc code=end
isValid('()');
