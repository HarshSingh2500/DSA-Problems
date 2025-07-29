function SortZeroOneTwo(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

let arr = [1, 0, 2, 1, 2, 1, 0, 2, 0, 1, 2, 0, 0, 1, 1, 2, 2]
const result = SortZeroOneTwo(arr)
console.log(result);