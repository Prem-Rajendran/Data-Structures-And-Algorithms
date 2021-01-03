// Given an array nums, 
// write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
//     Input: [0,1,0,3,12]
//     Output: [1,3,12,0,0]

// Note:
//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.

const performance = require('perf_hooks').performance;

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let t1 = performance.now();

    let index1 = 0;
    let index2 = 1;

    while(index2 < nums.length){

        if(nums[index1] == 0 && nums[index2] != 0){
            swap(nums, index1, index2)
            index1++;
            index2++;
        }
        else if(nums[index1] == 0 && nums[index2] == 0)
            index2++
        else{
            index1++;
            index2++;
        }
    }

    let t2 = performance.now();
    console.log("Execution Time RotateV0: " + (t2-t1) + "ms");
    
    return nums;
};

var swap = function(nums, index1, index2){
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

console.log(moveZeroes([0,1,0,3,12]))