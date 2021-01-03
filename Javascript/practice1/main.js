// Given an Array. Create a function that let's user know (true/false)
// whether any pair of elements in the array when added gives a particular sum.
// Input: Array(Integer) and Sum(Integer)

// Example 1:
// array = [1,2,4,9]; sum = 8; 
// return false

// Example 2:
// array = [1,2,4,4]; sum = 8;
// return true;

function compute(array, sum){
    let set = new Set();
    for(let i = 0; i < array.length; i++){
        if(set.has(array[i]))
            return true;
        else
            set.add(sum - array[i]);
    }
    return false;
}

function compute1(array, sum){
    let obj = {};
    for(let i = 0; i < array.length; i++){
        if(obj[array[i]] != null)
            return [obj[array[i]],i];
        else{
            obj[sum-array[i]] = i;
        }
    }
    return [];
}

var ARRAY = [1,2,4,4]
var SUM = 8
console.log(compute1(ARRAY, SUM));