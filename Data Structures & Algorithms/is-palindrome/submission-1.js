class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    s = s
    .split(" ")
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "");
  return s.split("").reverse().join("") === s;
    }
}
