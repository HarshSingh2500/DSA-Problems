//let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
//let arr = [5, 3, 7, 2, -1, -4, -6]
//let arr = [-8, -3, -5, 4, 2, 9]
let arr = [4, -1, 5, -2, 6, -3]
let left = 0;
let right = arr.length - 1;

while(left < right){
    if(arr[left] < 0){
        left += 1
    }
    else if(arr[right] > 0){
        right -= 1
    }
    else{
        arr[left] = arr[left] + arr[right]
        arr[right] = arr[left] - arr[right]
        arr[left] = arr[left] - arr[right]
        right -= 1
        left += 1
    }
}

console.log(arr);