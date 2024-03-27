// Calculate Grades

// Problem: You are given an array of student objects, each containing the student's name and their score on a test. Write a function calculateGrades(students) that calculates the grade for each student based on the following grading scale:

const students = [
  { name: 'Alice', score: 95 },
  { name: 'Bob', score: 82 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 60 },
  { name: 'Emma', score: 45 },
]

function calculateGrades(students) {
  let calculatedGrades = []

  for (const student of students) {
    let studentGrades = new Map()
    let gradeMark

    if (student.score < 60) {
      gradeMark = 'F'
    } else if (student.score >= 60 && student.score < 70) {
      gradeMark = 'D'
    } else if (student.score >= 70 && student.score < 80) {
      gradeMark = 'C'
    } else if (student.score >= 80 && student.score < 90) {
      gradeMark = 'B'
    } else {
      gradeMark = 'A'
    }

    studentGrades.set('name', student.name)
    studentGrades.set('grade', gradeMark)

    let studentGradesObj = Object.fromEntries(studentGrades.entries())

    calculatedGrades.push(studentGradesObj)
  }

  return calculatedGrades
}

console.log(calculateGrades(students))

// The time complexity is O(n) where n is the number of students
