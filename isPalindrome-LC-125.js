const s = "A man!, a plan, a canal: Panama";

const removePunctuation = new RegExp(/[^\w]|_/g);

//?  Solution 1
const validPalindrome = (str) => {
  //! ignore cases,punctuations and white spaces
  const newStr = str.replace(removePunctuation, "").toLowerCase();
  return newStr.split("").reverse().join("") === newStr
    ? `true - ${newStr} is a palindrome `
    : `false - ${newStr} is not a palindrome `;
};

// console.log(validPalindrome("racecar"));
// console.log(validPalindrome(s));
// console.log(validPalindrome("abc"));
// console.log(validPalindrome("level"));

//? Solution 2 - Mirror Concept
var isPalindrome = function (s) {
  s = s.replace(/[\W_]/g, "").toLowerCase();
  let left = 0; // get first character
  let right = s.length - 1; //get last character

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome(s));
console.log(isPalindrome("level"));
console.log(isPalindrome("rakib"));
console.log(isPalindrome("race a car"));
