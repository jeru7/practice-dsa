// Sum of Digits - Code Challenge provided by chatgpt

// Problem
// Write a recursive function to find the sum of digits of a given non-negative integer 'n'. For example, if n = 1234, the sum should be 1 + 2 + 3 + 4 = 10.

function sumOfDigits(num, index = 0) {
  let stringNum = num.toString()

  if (index === stringNum.length - 1) {
    return parseInt(stringNum[index])
  }

  let currentNum = parseInt(stringNum[index])

  return currentNum + sumOfDigits(num, index + 1)
}

console.log(sumOfDigits(1234))

// Above is my solution for the code. I asked chatgpt for the solution and it gives me this:

// function sumOfDigits(num) {
//     // Base case: If the number is a single digit, return the number itself
//     if (num < 10) {
//       return num;
//     }

//     // Extract the last digit from the number and add it to the sum
//     let lastDigit = num % 10;

//     // Recursive step: Remove the last digit and recurse with the remaining number
//     let remainingDigitsSum = sumOfDigits(Math.floor(num / 10));

//     // Return the sum of the current digit and the sum of remaining digits
//     return lastDigit + remainingDigitsSum;
//   }

//   // Test the function
//   console.log(sumOfDigits(1234)); // Output: 10
