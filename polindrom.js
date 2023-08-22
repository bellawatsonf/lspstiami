function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
console.log(checkPalindrome("apa"));

//data sequence
console.log(
  Array(8)
    .fill()
    .map((element, index) => index + 5)
);

const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(numbersArr); // Output: [2,3,3,4,5,5,5,6,9,10,21]

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(numbersArr); // Output: [21,10,9,6,5,5,5,4,3,3,2]

let numArray = [3, 4, 1, 7, 2];
let sortedArr = numArray.sort();
console.log(sortedArr); // Output: [1,2,3,4,7]
