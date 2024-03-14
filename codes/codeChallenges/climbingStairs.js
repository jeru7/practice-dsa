// Climbing stairs

// Problem: Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

function climbStaircase(staircase) {
  let steps = [1, 2]

  for (let i = 2; i < staircase; i++) {
    steps[i] = steps[i - 1] + steps[i - 2]
  }

  return steps[staircase - 1]
}

console.log(climbStaircase(6))

// The time complexity is O(n)
