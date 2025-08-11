public class ArrayRearrange {

    public static void main(String[] args) {
        int arr[] = { -12, 11, -13, -5, 6, -7, 5, -3, -6};
        int left = 0;
        int right = arr.length - 1;
        while(left < right){
            if(arr[left] < 0){
                left++;
            }
            else if(arr[right] > 0){
                right--;
            }
            else{
                arr[left] += arr[right];
                arr[right] = arr[left] - arr[right];
                arr[left] = arr[left] - arr[right];
                left++;
                right--;
            }
        }

        for(int i = 0; i<arr.length; i++){
            System.out.print(arr[i]+" ");
        }
    }
}