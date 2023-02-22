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

//                            alternative 

function isAnagram(str1, str2) {
  // Remove all non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Sort the letters of each string
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return str1 === str2;
}

console.log(isAnagram("silent", "listen")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
10) Write a function called reverseWords that takes a string as an argument and returns a new string with the words in reverse order. 
    For example, if the input string is "the quick brown fox", the function should return "fox brown quick the".
    
    function reverseWords(str) {
      const words = str.split(" ");
      return words.reverse().join(" ");
    }

    console.log(reverseWords("the quick brown fox")); // Output: "fox brown quick the"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  11)Write a function called removeDuplicates that takes an array of strings as an argument and returns a new array with all duplicate strings removed. 
     For example, if the input array is ["apple", "banana", "cherry", "apple", "banana"], the function should return ["apple", "banana", "cherry"].
     
     function reverseWords(arr) {
      let unique=[];
      arr.forEach((item)=>{
        if(unique.indexOf(item)==-1){
            unique.push(item);
        }
      })
      return unique;
     }

    //                    alternative

    function removeDuplicates(arr) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
          result.push(arr[i]);
        }
      }
      return result;
    }

    console.log(removeDuplicates(["apple", "banana", "cherry", "apple", "banana"])); // Output: ["apple", "banana", "cherry"]

     //                    alternative
    
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
12)Write a function called truncateString that takes two arguments: a string and a number. The function should truncate the string to the specified length and add an ellipsis ("...") to the end of the truncated string. 
  If the length of the string is less than or equal to the specified length, the original string should be returned unmodified. For example, if the input string is "The quick brown fox jumps over the lazy dog" and the input number is 20, the function should return "The quick brown fox...".
     
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  //          alternative 

   function truncateString(str, num) {
      return str.length <= num ? str : str.slice(0, num) + "...";
   }

  console.log(truncateString("The quick brown fox jumps over the lazy dog", 20)); // Output: "The quick brown fox..."

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
13) Write a function called reverseWords that takes a string as an input and returns a string with the order of the words reversed, but the letters within each word should be in the same order as they were in the original string. 
    For example, if the input string is "The quick brown fox", the function should return "ehT kciuq nworb xof".
    
    function reverseWords(str) {
      return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    } 

    //                          alternative 

    function reverseWords(str) {
      let words = str.split(" ");
      let reversedWords = [];

      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = "";

        for (let j = word.length - 1; j >= 0; j--) {
          reversedWord += word[j];
        }

        reversedWords.push(reversedWord);
      }

      return reversedWords.join(" ");
    }

    console.log(reverseWords("The quick brown fox")); // Output: "ehT kciuq nworb xof"


    console.log(reverseWords("The quick brown fox")); // Output: "ehT kciuq nworb xof"
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
14) Write a function called removeDuplicates that takes a string as input and returns a new string with all duplicate characters removed.
    For example, if the input string is "Hello, world!", the function should return "Helo, wrd!".
    
    function removeDuplicates(str) {
      return str
        .split("")
        .filter((char, index, array) => array.indexOf(char) === index)
        .join("");
    }

    console.log(removeDuplicates("Hello, world!")); // Output: "Helo, wrd!"
    console.log(removeDuplicates("Programming is awesome")); // Output: "Progaminwes"
    console.log(removeDuplicates("122333444455555666666777777788888888999999999")); // Output: "123456789"

//          alternative 

    function removeDuplicates(str) {
      return [...new Set(str)].join("");
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
15)

    

   


