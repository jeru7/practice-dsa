// Power Function

// Problem: Write a recursive function to calculate the power of a base number raised to an exponent.

function powerFunction(base, exp) {
  if (exp === 0) {
    return 1
  }

  return base * powerFunction(base, exp - 1)
}

console.log(powerFunction(2, 3))

// The time complexity is O(n) where n is exp.
