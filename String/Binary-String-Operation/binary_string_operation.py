def evaluate_binary_string(expr):
    result = int(expr[0])
    n = len(expr)

    for i in range(1, n - 1, 2):
        op = expr[i]
        val = int(expr[i + 1])

        if op == 'A':
            result &= val
        elif op == 'B':
            result |= val
        else:  # Treat 'C' as XOR
            result ^= val

    print("Result:", result)

# Example usage
expr = "1C0C1C1A0B1"
evaluate_binary_string(expr)
