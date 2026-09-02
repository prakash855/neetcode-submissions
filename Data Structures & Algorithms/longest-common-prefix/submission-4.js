class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs = strs.sort()
        let first = strs[0], last = strs[strs.length-1], prefix=''
        for(let i=0; i<first.length; i++){
            if(first[i] !== last[i]) return prefix;
            else prefix += first[i]
        }
        return prefix
    }
}
