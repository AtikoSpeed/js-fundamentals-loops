const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]
for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
let newArray = []
for (let i = 1; i < 11; i++) {
  newArray = []
  for (let q = 0; q < i; q++) {
    newArray.push(i)
  }
  nestedOne.push(newArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

// Initialize a new empty array
let newNewArray = []
// i is initialized, starts at 1 and ends after the last value which is 10
for (let i = 1; i < 11; i++) {
  // The new array gets reset
  newNewArray = []
  console.log('i: ', i)
  // Pushes the number i into the new array the same amount of times as i
  for (let q = 0; q < i; q++) {
    if (q !== 0) {
      console.log('q: ', q)
      newNewArray.unshift(q)
    }
  }
  // Adds the value of i to the beginning of the new array
  if (i !== 0) {
    newNewArray.unshift(i)
  }
  // Adds the new array the end of the answer
  nestedTwo.push(newNewArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
let newArrayFour = []
let newArrayBruh = []
for (let f = 1; f < 11; f++) {
  newArrayBruh = []
  for (let i = 1; i < f; i++) {
    newArrayFour = []
    for (let q = 0; q < i; q++) {
      newArrayFour.push(i)
    }
    newArrayBruh.push(newArrayFour)
  }
  deepOne.push(newArrayBruh)
  console.log(deepOne)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
