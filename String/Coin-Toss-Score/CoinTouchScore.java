public class CoinTouchScore {

    public static void main(String[] args) {
        String str = "HTHHTTHTHHH";
        int result = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'H') {
                result += 2;
            } else {
                result -= 1;
            }
        }
        System.out.println("Points: " + result);
    }
}