/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let cost = prices[0];
  let profit = 0;
  for(let i=1; i<prices.length; i++) {
    const getMoney = prices[i]-cost
    if(getMoney > 0 && getMoney > profit) {
      profit = getMoney;
    }
    if(prices[i]<cost) {
      cost = prices[i];
    }
  }
  return profit;
};
// @lc code=end

