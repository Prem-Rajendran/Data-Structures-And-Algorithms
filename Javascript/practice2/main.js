// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Follow up:
//     Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//     Could you do it in-place with O(1) extra space?

// Example 1:
//     Input: nums = [1,2,3,4,5,6,7], k = 3
//     Output: [5,6,7,1,2,3,4]
//     Explanation:
//     rotate 1 steps to the right: [7,1,2,3,4,5,6]
//     rotate 2 steps to the right: [6,7,1,2,3,4,5]
//     rotate 3 steps to the right: [5,6,7,1,2,3,4]
    
// Example 2:
//     Input: nums = [-1,-100,3,99], k = 2
//     Output: [3,99,-1,-100]
//     Explanation: 
//     rotate 1 steps to the right: [99,-1,-100,3]
//     rotate 2 steps to the right: [3,99,-1,-100]

const performance = require('perf_hooks').performance;

// Good 
function compute(nums, k){
    let t1 = performance.now();
    let start = nums.length - k;
    let end = nums.length
    let temp =  nums.splice(start,end).concat(nums);
    let t2 = performance.now();
    console.log("Execution Time RotateV0: " + (t2-t1) + "ms");
    return temp
}

function reverse(nums, start, end){
    while (start < end) {
        [nums[start],nums[end]] = [nums[end],nums[start]]
        start++;
        end--;
    }

    return nums;
}

// Bad
function rotate(nums, k){

    let t1 = performance.now();

    let length = nums.length -1;
    k %= nums.length;

    reverse(nums,0,length)
    reverse(nums,0,k - 1)
    reverse(nums,k,length)

    let t2 = performance.now();
    console.log("Execution Time RotateV1: " + (t2-t1) + "ms");
    return nums
}

// Best
function rotateV2(nums, k){
    let t1 = performance.now();
    nums.splice(0,0,...nums.splice(nums.length - k, nums.length));
    let t2 = performance.now();
    console.log("Execution Time RotateV2: " + (t2-t1) + "ms");
    return nums;
}

//console.log(compute([1,2,3,4,5,6,7],3));
//console.log(rotate([1,2,3,4,5,6,7],3));