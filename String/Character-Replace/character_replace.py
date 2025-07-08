def swap_a_p(s):
    result = ""
    for ch in s:
        if ch == 'a':
            result += 'p'
        elif ch == 'p':
            result += 'a'
        else:
            result += ch
    print(result)

# Example usage
swap_a_p("apple")
