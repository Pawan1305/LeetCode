/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const hasZero = (num) => num.toString().includes("0");
    for(let i=1;i<n;i++) {
        let num = n-i;
        if(!hasZero(i) && !hasZero(num)) {
            return [i, num];
        }
    }
};
