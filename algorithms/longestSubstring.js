const longestSubstring = (string) => {
  if(string.length <= 1) return string.length;
  //string = string.toLowerCase() // if we want uppercase and lowercase to count...
  
  const hs = new Set()
  let longest = 0
  let current = 0
  
  for(let i = 0; i < string.length; i++) {
    if(!hs.has(string[i])) {
      hs.add(string[i])
      current++

      if(i === string.length -1) {
          longest = Math.max(current, longest)
      }

    }
    else {
      longest = Math.max(current, longest)
      hs.clear()
      current = 0;
    }
  }
  return longest
}


//console.log(longestSubstring("abccabb")) // -> 3


const longestSubstring2 = (string) => {
    

}