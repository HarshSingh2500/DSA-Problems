function swapAandP(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      result += 'p'
    } else if (str[i] === 'p') {
      result += 'a'
    } else {
      result += str[i]
    }
  }
  console.log(result)
}

// Example usage
swapAandP('apple')
