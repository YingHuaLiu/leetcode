//https://leetcode-cn.com/problems/find-the-duplicate-number/solution/287xun-zhao-zhong-fu-shu-by-kirsche/
// 把数组看成存在环的链表，用快慢指针
// 可以把这题看成142题，找到环形链表的入口
function findDuplicate(nums) {
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
