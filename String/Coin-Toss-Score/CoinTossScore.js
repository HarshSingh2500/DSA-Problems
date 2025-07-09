function coinTossScore(tosses) {
  let result = 0
  for (let i = 0; i < tosses.length; i++) {
    if (tosses[i] === 'H') {
      result += 2
    } else {
      result -= 1
    }
  }
  console.log('Points:', result)
}

// Example usage
coinTossScore('HTHHTTHTHHH')
