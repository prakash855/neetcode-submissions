class Solution {
    public int maxProfit(int[] prices) {
        int min = prices[0], maxProfit = 0;
        for(int i=1; i<prices.length; i++){
            min = Math.min(min, prices[i-1]);
            maxProfit = Math.max(maxProfit, prices[i] - min);
        }
        return maxProfit;
    }
}
