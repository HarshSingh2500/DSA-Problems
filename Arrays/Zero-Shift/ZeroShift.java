public class ZeroShift {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 0, 4, 3, 0, 5, 0 };
        int n = arr.length;
        int index = 0; 

        // Move non-zero elements forward
        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr[index] = arr[i];
                index++;
            }
        }

        // Fill remaining positions with 0
        for (int i = index; i < n; i++) {
            arr[i] = 0;
        }

        // Print the result
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i]);
        }
    }
}
