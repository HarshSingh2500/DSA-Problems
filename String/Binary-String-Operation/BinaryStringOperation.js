function evaluateBinaryString(expr) {
  let result = parseInt(expr[0])

  for (let i = 1; i < expr.length - 1; i += 2) {
    let op = expr[i]
    let val = parseInt(expr[i + 1])

    if (op === 'A') {
      result = result & val
    } else if (op === 'B') {
      result = result | val
    } else {
      // Treat 'C' as XOR
      result = result ^ val
    }
  }

  console.log('Result:', result)
}

// Example usage
evaluateBinaryString('1C0C1C1A0B1')
