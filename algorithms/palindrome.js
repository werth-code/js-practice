const palindrome = (str) => {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    return str.split("").reverse().join("") === str
}

console.log(palindrome("a"))


const palindrome2 = (str) => {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()

    let p1 = 0;
    let p2 = str.length -1;

    while(p1 < p2) {
        if(str[p1] !== str[p2]) return false
        p1++
        p2--
    }
    return true
}

console.log(palindrome2("a"))