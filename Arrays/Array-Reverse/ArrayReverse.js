function reverseArray(arr) {
  let n = arr.length
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[n - i - 1]
    arr[n - i - 1] = temp
  }

  console.log('Reversed Array:')
  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i].toString())
  }
}


let arr = [1, 2, 3, 4, 5, 6]
reverseArray(arr)
