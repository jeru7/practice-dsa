// Counting Employee Ages

// Problem: Write a function that takes an array of employee objects as input and returns an object containing the count of employees for each age.

const employees = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 35 },
  { name: 'Emma', age: 30 },
]

function countEmployeeAges(emp) {
  let ageCount = {}

  emp.forEach((person) => {
    const { age } = person

    ageCount[age] = (ageCount[age] || 0) + 1
  })

  return ageCount
}

console.log(countEmployeeAges(employees))

// The time complexity is O(n)
