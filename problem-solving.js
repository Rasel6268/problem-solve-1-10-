//Problem 1: Reverse a String

const reverseStr = (str) => {
    const reverse = str
    return reverse.split('').reverse().join('')
}
console.log(reverseStr('hello'))

//Problem 2: Count Vowels in a String

const countVowel = (str) => {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let vowelsCount = 0;
   for (let i = 0; i < str.length; i++) {
      if(vowels.includes(str[i].toLowerCase())){
         vowelsCount++
      }

   }
    return vowelsCount

}

// console.log(countVowel('programming'))

//Problem 4: Find the Maximum Number

const maxNum = (arr) => {
  return Math.max(...arr)
}
console.log(maxNum([5, 1, 9, 3]))

//Problem 8: Capitalize First Letter of Each Word

const capitalize = (str) => {
  const arr = str.split(" ");
  const capitalized = arr.map((word) => word[0].toUpperCase() + word.slice(1));

  return capitalized.join(" ");
};

// console.log(capitalize("hello world"));

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
