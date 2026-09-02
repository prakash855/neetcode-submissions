class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        if(x === 0) return 0
        let xCopy = x, invertedNumber = 0;
        x = Math.abs(x);
        while(x>0){
            let rem = x % 10
            invertedNumber = invertedNumber * 10 + rem
            x = Math.floor(x / 10)
        }
        let limit = Math.pow(2,31)
        if(invertedNumber < -limit || invertedNumber > limit) return 0
        return xCopy > 0 ? invertedNumber : -invertedNumber
    }
}
