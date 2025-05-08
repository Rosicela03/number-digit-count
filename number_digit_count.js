/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const evenNums = nums.filter(num => String(num).length % 2 === 0).length;

   return evenNums;
}

