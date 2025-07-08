public class BinaryStringOperation {

    public static void main(String[] args) {
        String str = "1C0C1C1A0B1";
        int n = str.length();
        int result = Character.getNumericValue(str.charAt(0));
        for (int i = 1; i < n - 1; i += 2) {
            if (str.charAt(i) == 'A') {
                result = result & Character.getNumericValue(str.charAt(i + 1));
            } else if (str.charAt(i) == 'B') {
                result = result | Character.getNumericValue(str.charAt(i + 1));
            } else {
                result = result ^ Character.getNumericValue(str.charAt(i + 1));
            }
        }
        System.out.println("Result: " + result);
    }
}