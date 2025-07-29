# Sort 0s, 1s and 2s



## Problem Statement

Given an array `arr[]` containing only `0s`, `1s`, and `2s`, sort the array in **ascending order**.

You are **not allowed to use the built-in sort function**.

---

## Examples

### Example 1
**Input**:  
`arr = [0, 1, 2, 0, 1, 2]`

**Output**:  
`[0, 0, 1, 1, 2, 2]`

**Explanation**:  
All 0s, 1s, and 2s are grouped and sorted in ascending order.

---

### Example 2
**Input**:  
`arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]`

**Output**:  
`[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]`

---

## Constraints

- `1 <= arr.length <= 10^6`
- `0 <= arr[i] <= 2`