class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // if (strs.length === 0) return "";
  let length = Math.min(...strs.map((str) => str.length));
//   if (length === 0) return "";
  let prefix = "";
  for (let i = 0; i < length; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
    }
}
