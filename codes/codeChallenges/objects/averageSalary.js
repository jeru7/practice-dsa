// Calculate Average Salary

// Problem: Write a function that takes an array of employee objects as input and calculates the average salary of all employees.

const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 40000 },
]

function averageSalary(emp) {
  let totalEmp = 0
  const totalSalary = emp.reduce((total, employee) => {
    totalEmp++
    return total + employee.salary
  }, 0)

  const avgSalary = totalSalary / totalEmp

  return avgSalary
}

console.log(averageSalary(employees))

// The time complexity is O(n)
