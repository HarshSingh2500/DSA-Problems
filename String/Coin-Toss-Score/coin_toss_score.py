def coin_toss_score(tosses):
    result = 0
    for ch in tosses:
        if ch == 'H':
            result += 2
        else:
            result -= 1
    print("Points:", result)

# Example usage
coin_toss_score("HTHHTTHTHHH")
