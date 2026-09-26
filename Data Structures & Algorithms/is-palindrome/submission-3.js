class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      // Create an empty string to hold sober string (without special char)
      let str ="", reversedStr=''
      //Create an regex consition to test if it is sber
      let regex = /^[A-Za-z0-9]+$/
      // Iterate over string all with lowercase and get the sober string
      for(let i=0; i<s.length; i++){
        if(regex.test(s[i]))str+=s[i].toLowerCase()
      }
      // Now compare by reversing
      for(let i=str.length-1; i>=0; i--)reversedStr+=str[i]
      console.log({str, reversedStr})
      return str === reversedStr
    }
}