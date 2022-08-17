/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;

  let maxProfit = 0;

  let minPrice = Math.pow(10, 4) + 1;
  let minIndex = -1;
  for (let i = 0; i < len; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minIndex = i;
    }
    if (i > 0 && i > minIndex) {
      const profit = prices[i] - minPrice;
      maxProfit = Math.max(profit, maxProfit);
    }
  }
  return maxProfit;
};

// starts at 10:39
// submits at 11:09
// times: 30
