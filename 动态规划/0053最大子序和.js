var maxSubArray = function(nums) {
  let sum=pre=nums[0]
  for(let i=1;i<nums.length;i++){
    pre=Math.max(pre+nums[i],nums[i])
    sum=Math.max(pre,sum)
  }
  return sum
};
