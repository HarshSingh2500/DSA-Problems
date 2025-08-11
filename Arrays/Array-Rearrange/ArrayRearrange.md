# Move All Negative Numbers to Beginning and Positive to End


## 🧩 Problem Statement

Given an array containing both positive and negative integers (no zeroes), rearrange the array so that all **negative numbers** come **before** all **positive numbers**.

- The **order does not matter**.
- You must do this **in-place**, using **constant extra space**.

---

## 🧠 Input Format

- An array `arr[]` of length `n`
- Elements are integers: negative or positive
- No zeros are present

---

## ✅ Output Format

- A rearranged version of the array where all negative numbers come before positive numbers

---

## 🧪 Examples

### Example 1

**Input:**  
`arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]`

**Output:**  
`[-12, -13, -5, -7, -3, -6, 11, 6, 5]`

Note: The order of elements is not important, as long as all negatives are at the beginning.

---

## 📚 Constraints

- `1 <= arr.length <= 10^6`
- `-10^9 <= arr[i] <= 10^9`
- No zeroes in the array

---

## 💡 Approach

- Use the **two-pointer technique**:
  - One pointer from the beginning
  - One from the end
- Swap negative numbers to the front and positive to the back
- Stop when both pointers meet

This method ensures:
- **O(n)** time complexity
- **O(1)** space complexity

---

## 🛠️ What You'll Practice

- In-place array manipulation
- Two-pointer pattern
- Efficient memory use

---

## 📌 Follow-Up

Can you modify your solution to also maintain the **original order** of elements (i.e., stable partitioning)?  
(Note: That would require extra space or extra time.)

---

## 🧑‍💻 Author

Prepared by **[Your Name]**

---

## 🏷️ Tags

`Arrays` `In-place Algorithms` `Two-Pointer` `Beginner to Intermediate`
