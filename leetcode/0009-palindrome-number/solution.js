/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false; // negative numbers can't be palindrome
    let input = x;
    let rev=0;
    while(x > 0) {
        rev = (rev*10) + x%10;
        x = Math.floor(x/10);
    }
    return (input==rev)
};
