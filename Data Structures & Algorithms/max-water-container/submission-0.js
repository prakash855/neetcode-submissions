class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmountOfWater = 0;
        for(let i=0; i<heights.length; i++){
            for(let j=i+1; j<heights.length; j++){
                let currentMaxWater = Math.min(heights[i], heights[j]) * (j-i)
                if(maxAmountOfWater < currentMaxWater) maxAmountOfWater = currentMaxWater
            }
        }
        return maxAmountOfWater
    }
}
