const arr = [1,2,3,4,5,5,6,7,8,9]

const uniqueNums = new Set(arr)

uniqueNums.delete(9)

const newArr = [...uniqueNums]

// console.log(uniqueNums.size)
// console.log("Set:", uniqueNums)
// console.log(newArr)

//remove duplicate letters..

const string = 'aaabbbcccdddddeeef'

const stringNoDuplicateLetters = (str) => [...new Set(str)]

console.log(stringNoDuplicateLetters(string))