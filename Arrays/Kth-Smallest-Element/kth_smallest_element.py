def kth_smallest_element(arr, k):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    
    print(arr[k - 1])

arr = [7, 10, 4, 3, 20, 15]
k = 3
kth_smallest_element(arr, k)
