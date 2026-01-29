/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let left=1,right = x,ans=0;
    while(left<=right) {
        let avg = Math.floor((left+right)/2);
        if(avg*avg == x) return avg;

        if(avg*avg < x) {
            ans = avg;
            left=avg + 1;
        } else {
            right = avg-1;
        }
    }
    return ans;
};
