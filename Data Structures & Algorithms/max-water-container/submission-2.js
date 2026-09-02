class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterContained = 0;
        let left = 0, right = heights.length-1;
        while(left < right){
            let width = right - left
            let length = Math.min(heights[left], heights[right])
            let area = length * width
            maxWaterContained = Math.max(maxWaterContained, area)

            if(heights[left] < heights[right]) left += 1
            else right -= 1
        }
        return maxWaterContained;
    }
}
