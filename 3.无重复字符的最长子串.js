/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   const hashMap = {};
   let left = -1;
   let max = 0;
   for(let i = 0; i < s.length; i++) {
    if(hashMap.hasOwnProperty(s[i])) {
      // 如果有了重复的字符，当前left标和记忆字符下标取大值
      left = Math.max(left, hashMap[s[i]]);
    }
    hashMap[s[i]] = i;
    max = Math.max(max, i - left)
   }
   return max;
};
// @lc code=end
