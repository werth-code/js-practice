const str1 = "az#z"
const str2 = "ab#z"
const str3 = ""
const str4 = "a#"
const str5 = "###a"
const str6 = "a"

const backspace = (str1, str2) => strBuilder(str1) === strBuilder(str2)

const strBuilder = (str) => {
  const a = []
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "#") a.pop()
    else a.push(str[i])
  }
  return a.join("")
}

backspace(str1, str2)
backspace(str3, str4)
backspace(str5, str6)
backspace(str1, str4)