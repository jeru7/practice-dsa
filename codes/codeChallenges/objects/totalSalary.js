// Calculate the Total Salary

// Problem: Write a function that takes an array of employee objects as input and calculates the total salary of all employees combined.

const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 40000 },
]

function calculateSalary(emp) {
  let total = 0
  emp.forEach((person) => {
    total += person['salary']
  })
  return total
}

console.log(calculateSalary(employees))

// The time complexity is O(n)
