// int类型数组，我们把两个数差值的绝对值定义为这两个数的距离，找到数组中距离小于target的数值对
// 前缀+双指针，不会做
function fn1(nums) {
  if(nums.length<=1){
    return [];
  }
  let sum=[nums[0]],res=[];
  for (let i = 1; i < nums.length; i++) {
    sum[i]=sum[i-1]+nums[i];
  }
}
// 双指针
function fn2(nums,target){
  let res=[];
  for(let i=0;i<nums.length-1;i++){
    for (let j = i + 1; j < nums.length; j++) {
      if(Math.abs(nums[i] - nums[j]) < target) {
        res.push([nums[i],nums[j]])
      }
    }
  }
  return res;
}

console.log(fn2([1, 3, 5, 9, 6], 4));

