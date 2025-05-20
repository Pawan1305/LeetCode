/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const s = new Set();
    
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!s.has(nums[i])) {
            s.add(nums[i]);
            nums[idx++] = nums[i];
        }
    }
    
    return idx;
};
