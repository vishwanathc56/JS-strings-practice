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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
5)Write a function called reverseWords that takes a string as an argument and returns the string with the words reversed. A word is defined as a sequence of non-space characters. For example, if the input is "hello world", the output should be "world hello".

function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = words.reverse();
  const reversedStr = reversedWords.join(" ");
  return reversedStr;
}

console.log(reverseWords("hello world")); // Output: "world hello"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
6)Write a function called capitalizeFirstLetter that takes a string as an argument and returns the string with the first letter of each word capitalized. A word is defined as a sequence of non-space characters. For example, if the input is "hello world", the output should be "Hello World".

function capitalizeFirstLetter(str) {
  const words = str.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  
  return words.join(" ");
}

console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
7)Write a function called findLongestWord that takes a string as an argument and returns the length of the longest word in the string. A word is defined as a sequence of non-space characters. For example, if the input is "hello world", the output should be 5, because "hello" is the longest word in the string.

function word(arr){
    const words = arr.split(" ");
   let longest =0;
   for(let i=0;i<words.length;i++){
       if(longest<words[i].length){
       longest= words[i].length;
       }
   }
   return longest;
}

//                                                  alternative

function findLongestWord(str) {
  const words = str.split(" ");
  let maxLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  
  return maxLength;
}

console.log(wird("hello world"));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
8)Write a function called countOccurrences that takes a string and a target substring as arguments, and returns the number of times the target substring appears in the string. For example, if the input string is "hello world" and the target substring is "o", the output should be 2, because "o" appears twice in "hello world".

function wird(str, target){
    const targt = target;
    const words = str.split("");
    //console.log("words", words)
    let count = 0;
    for(let i=0;i<words.length;i++){
        if(words[i]===targt){
            count++;
        }
    }
    return count;  
}

//                              alternative

function countOccurrences(str, target) {
  let count = 0;
  let index = str.indexOf(target);
  
  while (index !== -1) {
    count++;
    index = str.indexOf(target, index + 1);
  }
  
  return count;
}

console.log(countOccurrences("hello world", "o")); // Output: 2

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
9)Write a function called isAnagram that takes two strings as arguments and returns true if the two strings are anagrams, and false otherwise. Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, using all the original letters exactly once. 
For example, "listen" and "silent" are anagrams, while "hello" and "world" are not.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

//                    alternative

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
