/* 
  https://github.com/cherokee-rose
  https://leetcode.com/problems/coin-change/

  You are given an integer array coins representing coins of different denominations 
  and an integer amount representing a total amount of money.

  Return the fewest number of coins that you need to make up that amount. 
  If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin. 

  Example 1:
    Input: coins = [1,2,5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1

  Example 2:
    Input: coins = [2], amount = 3
    Output: -1

  Example 3:
    Input: coins = [1], amount = 0
    Output: 0
    
  Constraints:
    * 1 <= coins.length <= 12
    * 1 <= coins[i] <= 2^31 - 1
    * 0 <= amount <= 104
*/

/* 
  Bottom-up approach.
  The idea is to initialize an array that stores all operations and is being built
  from bottom '0' to top 'amount'.
  
  Let's take the example where amount = 11 and coins = [1, 2, 5].
  First, notice the overalapping sub-problems:
  
  0 = 0
  1 = 1
  2 = 1 + 1 || 2
  3 = 1 + 2 || 1 + 1 + 1
  4 = 2 + 2 || 1 + 1 + 1 + 1 || 1 + 1 + 2
  5 = 5
  ...
  11 = 5 + 5 + 1 || 2 + 2 + 2 + 2 + 2 + 1 || ...
  
  Each result is overlapping(connected) to the previous result.
  At each number, we choose the minimum value(number of coins) by looking at the minimum 
  number of coins of the number minus a coin(dp[i - coins[j]] + 1) and the current minimum 
  of the number dp[i]. For example, if we want to know the minimum number of coins we need 
  to build 11, we first need to look at the minimum number of coins it takes to build
  11 - 1 = 10, 11 - 2 = 9, and 11 - 5 = 6 and choose the minimum value of those. 
  Since we're starting from 1, we're building our final result from the bottom, hence, bottom-up.
  
  Time complexity: O(n * m)
  Space complexity: O(n)
*/
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1);
    dp.fill(-1);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i += 1) {
      for (let j = 0; j < coins.length; j += 1) {
        if (i - coins[j] === 0) {
          dp[i] = 1;
          break;
        }
          
        if (i - coins[j] > 0 && dp[i - coins[j]] !== -1) {
          if (dp[i] === -1) {
            dp[i] = dp[i - coins[j]] + 1;
          } else {
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
          }         
        }
      }
    }
      
    return dp[amount];
  };