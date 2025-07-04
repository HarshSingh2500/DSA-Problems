public class ArrayReverse {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6 };
        int n = arr.length;
        int temp = 0;
        for (int i = 0; i < n / 2; i++) {
            temp = arr[i];
            arr[i] = arr[n - i - 1];
            arr[n - i - 1] = temp;
        }
        System.out.println("Reversed Array: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i]);
        }
    }
}