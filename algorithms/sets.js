// YOU CAN PASS A SET AN ITERABLE String, Array, etc.

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


const noDups = (string) => {
    // const charSet = new Set()
    // for(let i = 0; i < string.length; i++) {
    //     charSet.add(string[i])
    // }
    return [...new Set(string)]
}

console.log(noDups(arr))