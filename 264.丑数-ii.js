/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 可以理解为三个指向有序链表头结点的指针
  let p2 = 1,
    p3 = 1,
    p5 = 1;
  // 可以理解为三个有序链表的头节点的值
  let line2 = 1,
    line3 = 1,
    line5 = 1;
  // 可以理解为最终合并的有序链表（结果链表）
  let uglyList = {};
  // 可以理解为结果链表上的指针
  let p = 1;

  // 开始合并三个有序链表，找到第 n 个丑数时结束
  while (p <= n) {
    // 取三个链表的最小结点
    let min = Math.min(line2, line3, line5);
    // 将最小节点接到结果链表上
    uglyList[p] = min;
    p++;
    // 前进对应有序链表上的指针
    if (min == line2) {
      line2 = 2 * uglyList[p2];
      p2++;
    }
    if (min == line3) {
      line3 = 3 * uglyList[p3];
      p3++;
    }
    if (min == line5) {
      line5 = 5 * uglyList[p5];
      p5++;
    }
  }
  return uglyList[n];
};
// @lc code=end
nthUglyNumber(10)