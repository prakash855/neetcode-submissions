class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    getFrequency(arr){
        return arr.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc
        }, {})
    }
    topKFrequent(nums, k) {
        let obj = this.getFrequency(nums)
        let arr = [];
        for(let el in obj) arr.push([+el, obj[el]])
        return arr.sort((a,b) => b[1]-a[1]).map(num => num[0]).slice(0,k)
    }
}
