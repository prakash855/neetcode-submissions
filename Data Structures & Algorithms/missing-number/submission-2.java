class Solution {
    public int missingNumber(int[] nums) {
        // n/2*(a+l)
        int n = nums.length;
        int sum = (n * (1 + n))/2;
        System.out.println(sum);
        System.out.println(n);
        for (int i = 0; i < n; i++) {
            sum -= nums[i];
        }

        return sum;
    }
}