/*
! Input: nums = [2,7,11,15], target = 9
! Output: [0,1]
! Output: Because nums[0] + nums[1] == 9, we return [0, 1].


*/
var twoSum = function (nums, target) {
  return nums.reduce((a, b, index) => {
    return index;
  }, 0);
};
console.log(twoSum([4, 5], 9));
let arr = [1, 2, 3];
let out = [];
arr.forEach((i, index) => {
  console.log(index);
});
