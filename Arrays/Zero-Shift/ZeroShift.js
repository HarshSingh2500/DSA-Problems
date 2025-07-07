function shiftZerosToEnd(arr) {
  let n = arr.length
  let index = 0 // Position to place the next non-zero element

  // Move non-zero elements forward
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i]
      index++
    }
  }

  // Fill the rest with zeros
  for (let i = index; i < n; i++) {
    arr[i] = 0
  }

  console.log(arr.join(''))
}

// Example usage
let arr = [1, 2, 0, 4, 3, 0, 5, 0]
shiftZerosToEnd(arr)
