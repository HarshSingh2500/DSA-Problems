# Check if a String is Palindrome or Not

## Problem Statement

Given a string `s`, return `true` if the string is a **palindrome**, otherwise return `false`.

A string is called a palindrome if it reads the same **forward and backward**.

---

## Examples

### Example 1
**Input**:  
`s = "hannah"`

**Output**:  
`true`

**Explanation**:  
The string reversed is `"hannah"`, which is the same as the original.

---

### Example 2
**Input**:  
`s = "aabbaaa"`

**Output**:  
`false`

**Explanation**:  
The string reversed is `"aaabbaa"`, which is not the same as the original.

---

## Constraints

- The input string consists of lowercase/uppercase letters.
- Length of the string: `0 <= s.length <= 100`

---

## Approach

To check if a string is a palindrome:

1. Reverse the string.
2. Compare the reversed string with the original.
3. If they are the same, return `true`; otherwise, return `false`.

