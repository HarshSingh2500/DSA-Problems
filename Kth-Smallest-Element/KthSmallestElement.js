function kthSmallestElement(arr, k) {
  let n = arr.length

  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  console.log(arr[k - 1])
}


let arr = [7, 10, 4, 3, 20, 15]
let k = 3
kthSmallestElement(arr, k)
