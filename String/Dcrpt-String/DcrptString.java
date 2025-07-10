public class DcrptString {

    public static void main(String[] args) {
        String str = "a2b2c3d1";
        int num = 8;
        String s = "";
        int sum = 0;
        for (int i = 1; i < str.length(); i += 2) {
            sum += Character.getNumericValue(str.charAt(i));
            if (sum >= num) {
                s += str.charAt(i - 1);
                break;
            }
        }
        System.out.println(s);
    }
}