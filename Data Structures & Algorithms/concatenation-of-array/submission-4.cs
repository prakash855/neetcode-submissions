public class Solution {
    public int[] GetConcatenation(int[] nums) {
        int len = nums.Length;
        int[] results = new int[2*len];
        for(int i = 0; i < len; i++){
            results[i] = nums[i];
            results[i+len] = nums[i];
        }
        return results;
    }
}