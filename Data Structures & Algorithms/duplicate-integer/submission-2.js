class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b) => a-b)
        let prev = null
        for(let i of nums){
            if(i === prev) return true
            prev = i
        }
        return false
    }
}
