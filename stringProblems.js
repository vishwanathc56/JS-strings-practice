1) Write a function called reverseString that takes a string as an argument and returns the reverse of that string. For example, if the input is "hello", the output should be "olleh".

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

//------------------------------------------------------------------------------------------------------------------------------
