class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {}, max=0, mejorityElement = null
        for(let num of nums){
            if(obj[num]) obj[num] += 1
            else obj[num] = 1
        }
        for(let key in obj){
            if(obj[key] > max){
                max = obj[key]
                mejorityElement = key
            }
        }
        return mejorityElement
    }
}
