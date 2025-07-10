function decryptString(str, num) {
  let sum = 0
  let result = ''

  for (let i = 1; i < str.length; i += 2) {
    let count = parseInt(str[i])
    sum += count
    if (sum >= num) {
      result = str[i - 1]
      break
    }
  }

  console.log(result)
}

// Example usage
decryptString('a2b2c3d1', 8)
