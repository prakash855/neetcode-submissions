class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let length = digits.length, sum=1, arr=[]
        for(let i=length-1; i>=0; i--){
            sum += digits[i] * (10 ** (length-1-i))
        }
        while(sum>0){
            let el = sum % 10
            arr.unshift(el)
            sum = Math.floor(sum/10)
        }
        return arr
    }
}
