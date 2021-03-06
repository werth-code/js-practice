const array = ['hello', 'goodbye', 'hi', 'puppy', 'congratulations', 'whippet', 'puppy', 'lizard', 'hi']

//filter <= 6 chars
//remove duplicates
const wordsLessThanSixChars = (arr) => arr.filter(word => word.length <= 6)
const removeDuplicates = (arr) => [...new Set(wordsLessThanSixChars(arr))]

console.log(removeDuplicates(array))