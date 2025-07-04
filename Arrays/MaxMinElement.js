function findMinMax(arr) {
  let min = arr[0]
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }

  console.log(`Min: ${min}, Max: ${max}`)
}

// Example usage
let arr = [8, 4, 5, 1, 9, 5, 2, 13, 10]
findMinMax(arr)
