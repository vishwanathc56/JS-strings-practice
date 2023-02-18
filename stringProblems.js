1) Write a function called reverseString that takes a string as an argument and returns the reverse of that string. For example, if the input is "hello", the output should be "olleh".

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

//------------------------------------------------------------------------------------------------------------------------------

2) Write a function called findLongestWord that takes a string as an argument and returns the length of the longest word in the string. For example, if the input is "The quick brown fox jumps over the lazy dog", the output should be 5 (the length of the longest word, which is "jumps").

function findLongestWord(str) {
  const words = str.split(" ");
  let maxLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  }
  
  return maxLength;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: 5

//-----------------------------------------------------------------------------------------------------------------------------------

3) Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false otherwise. A palindrome is a word or phrase that is spelled the same way forwards and backwards. For example, "racecar" and "level" are palindromes.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//              alternative solution

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


4)Write a function called countVowels that takes a string as an argument and returns the number of vowels in the string. Vowels are the letters "a", "e", "i", "o", and "u". For example, if the input is "hello world", the output should be 3 (the number of vowels in the string).

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("hello world")); // Output: 3

//                      alternative

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("hello world")); // Output: 3

