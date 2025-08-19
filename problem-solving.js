//Problem 1: Reverse a String

const reverseStr = (str) => {
  const reverse = str;
  return reverse.split("").reverse().join("");
};
console.log(reverseStr("hello"));

//Problem 2: Count Vowels in a String

const countVowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

console.log(countVowel('programming'))
// Problem 3: Check for Palindrome
const isPalindrome =(str) =>{
  const filter = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = filter.split("").reverse().join("");
  return filter === reversedStr;
}
console.log(isPalindrome("madam"));

//Problem 4: Find the Maximum Number

const maxNum = (arr) => {
  return Math.max(...arr);
};
console.log(maxNum([5, 1, 9, 3]));
//Problem 5: Remove Duplicates from an Array
const removeDuplicate =(arr) => {
  const isDuplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isDuplicate.includes(arr[i])) {
      isDuplicate.push(arr[i]);
    }
  }

  return isDuplicate;
}
const arrNum = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(arrNum));

//Problem 6: Sum of All Numbers in an Array

const sunNum = (arr) => {
  return arr.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
};
console.log(sunNum([1, 2, 3, 4]));

const sumNum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumNum([1, 2, 3, 4]));

//Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
console.log(findEvenNumbers(numbers));

//Problem 8: Capitalize First Letter of Each Word

const capitalize = (str) => {
  const arr = str.split(" ");
  const capitalizSen = arr.map((word) => word[0].toUpperCase() + word.slice(1));

  return capitalizSen.join(" ");
};

console.log(capitalize("hello world"));


