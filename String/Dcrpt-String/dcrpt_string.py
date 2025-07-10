def decrypt_string(s, num):
    result = ""
    total = 0
    for i in range(1, len(s), 2):
        count = int(s[i])
        total += count
        if total >= num:
            result = s[i - 1]
            break
    print(result)

# Example usage
decrypt_string("a2b2c3d1", 8)
