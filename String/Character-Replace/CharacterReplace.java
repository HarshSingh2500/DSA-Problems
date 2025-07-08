public class CharacterReplace {

    public static void main(String[] args) {
        String str = "apple", result = "";
        // char ch1 = 'a', ch2 = 'p';
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'a') {
                result += 'p';
            } else if (str.charAt(i) == 'p') {
                result += 'a';
            } else {
                result += str.charAt(i);
            }
        }
        System.out.println(result);
    }
}