const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 3, 2, 1, 10]

function combineArray(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))]
}

console.log(combineArray(arr1, arr2))

const object = {
    name: "matt",
    friends: {
        names: ['dave', 'laurie', 'henry'],
        pets: ['bear']
    }
}

const { friends: { names }} =  object

const { friends: { pets }} = object
console.log(names)

const lNames = names.filter(name => name.startsWith('l'))
console.log(lNames)

console.log(pets)