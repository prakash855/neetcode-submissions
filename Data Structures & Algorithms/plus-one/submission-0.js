class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        return (+digits.join("")+1).toString().split("")
    }
}
