class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          let sMap = {},
    tMap = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }
  for (let c in sMap) {
    if (sMap[c] !== tMap[c]) return false;
  }
  return true;
    }
}
