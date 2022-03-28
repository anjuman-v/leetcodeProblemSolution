/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
   var i=0;
    var j = nums.length-1;
    while(i<i){
        if(nums[i] + nums[j] == target){
           console.log(i, j)
        }
       else if(nums[i] + nums[j] < target){
            i++
        }
        else {
            j--
        }
    }
};