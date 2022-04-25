/* 
    https://leetcode.com/problems/merge-sorted-array/
    https://github.com/cherokee-rose

    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
    representing the number of elements in nums1 and nums2 respectively.
    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
    To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
    and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Example:
        Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        Output: [1,2,2,3,5,6]
        Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
        The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

    Constraints:
        * nums1.length == m + n
        * nums2.length == n
        * 0 <= m, n <= 200
        * 1 <= m + n <= 200
        * -10^9 <= nums1[i], nums2[j] <= 10^9
 
    Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let mPos: number = 0;
    let nPos: number = 0;
    let temp: number;
    
    while (mPos < m) {
        if (nums1[mPos] > nums2[nPos]) {
            temp = nums1[mPos];
            nums1[mPos] = nums2[nPos];
            nums2[nPos] = temp; 

            while (nPos < n - 1 && nums2[nPos] > nums2[nPos + 1]) {
                temp = nums2[nPos];
                nums2[nPos] = nums2[nPos + 1];
                nums2[nPos + 1] = temp;
                nPos += 1;
            }

            nPos = 0;
        }
        
        mPos += 1;
    }

    for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i]; 
    }
};

console.log(merge([1], 0, [1], 1))