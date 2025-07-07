def shift_zeros_to_end(arr):
    n = len(arr)
    index = 0  # Position to place the next non-zero element

    # Move non-zero elements forward
    for i in range(n):
        if arr[i] != 0:
            arr[index] = arr[i]
            index += 1

    # Fill the rest with zeros
    for i in range(index, n):
        arr[i] = 0

    print("".join(map(str, arr)))

# Example usage
arr = [1, 2, 0, 4, 3, 0, 5, 0]
shift_zeros_to_end(arr)
