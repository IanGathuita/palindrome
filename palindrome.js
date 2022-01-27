function check_palindrome(string){
    let string_array = string.split("");
    let reversed_string_array = string_array.reverse();
    let reversed_string = reversed_string_array.join("");
    if(reversed_string === string){
        return true;
    }
    return false;
}

let is_palindrome = check_palindrome("racecar");
console.log(is_palindrome);
