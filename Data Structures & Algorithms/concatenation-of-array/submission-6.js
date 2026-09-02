class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let orginalLength = [...nums].length;
        for(let i=0; i<orginalLength; i++){
            nums.push(nums[i])
        }
        return nums
    }
}
