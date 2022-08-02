/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // buy first. Return zero if the prices are descending.
  if (prices.length < 2) return 0;
  let min = Math.pow(10, 4) + 1;
  let max = 0;
  for (let i = 0; i < prices.length; ++i) {
    min = Math.min(prices[i], min); // 더 작은값을 만날때마다 min갱신
    max = Math.max(max, prices[i] - min); // 오늘가격에서 앞에서 정해진 min을 뺀 후, 기존 max와 비교
  }
  return max;
};

// starts at 12:00
// submits at 12:31
// times: 31
// Discuss 참고 => 다시 풀기