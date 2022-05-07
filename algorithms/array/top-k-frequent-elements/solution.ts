/* 
  https://github.com/cherokee-rose
  https://leetcode.com/problems/top-k-frequent-elements/submissions/

  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

  Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

  Example 2:
    Input: nums = [1], k = 1
    Output: [1]
    
  Constraints:
    * 1 <= nums.length <= 10^5
    * k is in the range [1, the number of unique elements in the array].
    * It is guaranteed that the answer is unique.
    
  Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// Time complexity: O(n log n)
// Space complexity: O(n)
function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();

  // O(n)
  // Construct the frequency table
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // O(n * log n)
  // sort the map in the descending order
  let entries = [...map.entries()];
  entries.sort((a, b) => {
    return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
  });

  // take the most k frequent elements
  let kFreq = [];
  for (let i = 0; i < k; i += 1) {
    kFreq.push(entries[i][0]);
  }

  return kFreq;
}

// Time complexity: O(n)
// Space complexity: O(n)
function topKFrequent1(nums: number[], k: number): any[] {
  // construct a table
  let freq: {[key: number]: number} = {};
  for (let i = 0; i < nums.length; i += 1) {
    freq[nums[i]] = freq[nums[i]] === undefined ? 1 : freq[nums[i]] + 1;
  }

  // initialize the count-bucket
  let count: number[][] = new Array(nums.length + 1);

  // The count of the element is the index of the subarray
  // The subarray contains all the elements that have the same count
  for (const key in freq) {
    if (count[freq[key]] === undefined) {
      count[freq[key]] = [Number(key)]; 
    } else {
      count[freq[key]].push(Number(key)); 
    }
  }

  // create the result
  // starting from the end, append all the most frequent elements to the result 
  let result = [];
  outer: for (let i = count.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < count[i]?.length; j += 1) {
      result.push(count[i].pop());
      if (result.length === k) {
        break outer;
      }
    }
  }

  return result;
}
