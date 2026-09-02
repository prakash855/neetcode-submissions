class Solution {
    public int maxSubArray(int[] nums) {
        int maxi = Integer.MIN_VALUE, curr=0;
        for(int num: nums){
            curr += num;
            maxi = Math.max(maxi, curr);

            if(curr < 0) curr = 0;
        }
        return maxi;
    }
}
