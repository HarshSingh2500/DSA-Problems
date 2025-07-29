def sort_zeros_ones_twos(arr):
    for i in range(0, len(arr)):
        for j in range(i+1, len(arr)):
            if(arr[i] > arr[j]):
                arr[i], arr[j] = arr[j], arr[i]
    return arr


arr = [1, 0, 2, 1, 2, 1, 0, 2, 0, 1, 2, 0, 0, 1, 1, 2, 2]
print(sort_zeros_ones_twos(arr))