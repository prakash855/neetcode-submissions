class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
    return strs.reduce((acc, curr) => {
    let i = 0;
    while (i < acc.length && i < curr.length && acc[i] === curr[i]) i++;
    return acc.slice(0, i);
  });
    }
}
