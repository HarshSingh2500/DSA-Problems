def find_min_max(arr):
    min_val = arr[0]
    max_val = arr[0]

    for num in arr:
        if num < min_val:
            min_val = num
        elif num > max_val:
            max_val = num

    print(f"Min: {min_val}, Max: {max_val}")

# Example usage
arr = [8, 4, 5, 1, 9, 5, 2, 13, 10]
find_min_max(arr)
