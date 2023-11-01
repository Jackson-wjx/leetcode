/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let ps = 0; // s的指针
  let pt = 0; // p的指针
  while (ps < s.length && pt < t.length) {
    if(s[ps] === t[pt]) {
      ps++;
      pt++;
    } else {
      pt++;
    }
  }
  if (ps === s.length) {
    return true;
  }
  return false;
};
// @lc code=end

