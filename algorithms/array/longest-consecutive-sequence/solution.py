from pstats import SortKey


class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Consturct the table
        dict = {}
        for n in nums:
            dict.update({n: n})

        localMax = 0
        globalMax = 0
        for k in dict.keys():
            for i in range(1, len(nums)):
                if k + i in dict:
                    localMax += 1
                else:
                    break
            
            globalMax = max(globalMax, localMax)
            localMax = 1
        
        return globalMax