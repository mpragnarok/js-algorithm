//   Best Time to Buy and Sell Stock II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

function maxProfit(prices: number[]): number {
  let profits: number = 0;
  for (let i = 0; i < prices.length; i++) {
    // if the prices[i-1] < prices[i], do the transaction
    if (prices[i - 1] < prices[i]) {
      profits += prices[i] - prices[i - 1];
    }
  }
  return profits;
}

// Input: prices = [7,6,4,3,1] // 0

// Input: prices = [1,2,3,4,5] // 4

// Input: prices = [7,1,5,3,6,4] // 7

// maxProfit([7,6,4,3,1]); // 0
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
