class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let length = word1.length > word2.length ? word1.length : word2.length
        let mergedString = ''
        for(let i=0; i<length; i++){
    mergedString += word1[i] ? word1[i] : "";
    mergedString += word2[i] ? word2[i] : "";
        }
        return mergedString
    }
}
