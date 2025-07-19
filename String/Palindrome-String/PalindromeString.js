function CheckPalindrome(str){
    for (let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            console.log("Not a Palindrome");
            return;
        }
    }
    console.log("Is a Palindrome");
}

let str = 'aabbaaa'
CheckPalindrome(str);