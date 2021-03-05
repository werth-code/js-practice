const string = 'this is some text, we would like to add a new line after the aforementioned line of length'

function leftJustify(string, length) {

    const singleWords = string.split(' ')

    const finalLines = []
    let currentString = ''

    for(let i = 0; i < singleWords.length; i++) {
        let remainingLength = length - currentString.length

        if(remainingLength > singleWords[i].length) currentString += singleWords[i] + " "
        else if(remainingLength === singleWords[i].length) {
            currentString += singleWords[i]
            finalLines.push(currentString)
            currentString = ''
        }
        else { //remainingLength < currentWord
            finalLines.push(currentString)
            currentString = singleWords[i] + " "
        }
    }
    finalLines.push(currentString)
    return finalLines.join('\n')
}

console.log(leftJustify(string, 14))