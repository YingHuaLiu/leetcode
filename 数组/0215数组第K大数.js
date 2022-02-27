/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
// 1.部分快排
function findKthLargest(nums, k) {
  if(!nums.length || k > nums.length) {
    return -1;
  }
  return help(nums, 0, nums.length - 1, nums.length - k);
}

function help(nums, left, right, k) {
  // 如果区间过小就用插入排序
  if(right < left) {
    return -1;
  }
  //每次取数组最左边、中间、和最右边的中值为基准值
  let pivot = medianOfThree(nums, left, right);
  let l = left; //左指针
  let m = left + 1; //中指针
  let r = right; //右指针

  while (m <= r) {
    if(nums[m] === pivot) {
      m++;
    } else if(nums[m] < pivot) {
      [nums[m], nums[l]] = [nums[l], nums[m]];
      l++;
      m++;
    } else {
      [nums[m], nums[r]] = [nums[r], nums[m]];
      r--;
    }
  }
  if(k <= l - 1) {
    return help(nums, left, l - 1, k);
  } else if(k >= r + 1) {
    return help(nums, r + 1, right, k);
  }
  return nums[k];
}

function medianOfThree(nums, left, right) {
  const mid = left + (right - left) >> 1;
  if(nums[mid] > nums[right]) {
    [nums[mid], nums[right]] = [nums[right], nums[mid]];
  }
  if(nums[left] > nums[right]) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  if(nums[mid] > nums[left]) {
    [nums[mid], nums[left]] = [nums[left], nums[mid]];
  }
  return nums[left];
}


// 2.堆排序
// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/
/**
 *  第 n 个元素的 左子节点 为 2*n+1
 *  第 n 个元素的 右子节点 为 2*n+2
 *  第 n 个元素的 父节点 为 (n-1)/2
 *  最后一个非叶子节点为 Math.floor(arr.length/2)-1
 */
function findKthLargest(nums, k) {
  let heapSize = nums.length;
  // 构建出一个大顶堆
  // 从最后一个非叶子节点开始
  for (let i = (heapSize >> 1) - 1; i >= 0; i--) {
    maxHeapify(nums, i, heapSize);
  }
  // 核心：这里i >= nums.length - k + 1,是当遍历到top k顶构造完成时，不再交换到尾部，直接获取头节点就是top k
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    // 将堆顶节点nums[0]换到nums末尾,下次处理[0,heapSize-1]的堆
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 上一步将堆顶元素放到了末尾，所以需要处理的堆长度减一
    --heapSize;
    // 因为0下标的节点被替换了，所以处理以0下标为堆顶的堆，处理[0,heapSize]的堆
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
}

// i是非叶子节点，该函数是调整下标i为顶的堆
function maxHeapify(nums, i, heapSize) {
  // 左孩子节点和右孩子节点
  let l = i * 2 + 1, r = i * 2 + 2;
  let largest = i;
  if(l < heapSize && nums[l] > nums[largest]) {
    largest = l;
  }
  if(r < heapSize && nums[r] > nums[largest]) {
    largest = r;
  }
  if(largest !== i) {
    // 将l/r中较大的节点与当前i节点交换
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    // 因为当前节点被替换了，所以largest节点可能不满足堆的性质，需要对largest为堆顶的堆进行调整
    maxHeapify(nums, largest, heapSize);
  }
}

// console.log(findKthLargest([2, 4, 6, 8, 1, 3, 5], 1));
let nums = [2, 4, 6, 8, 1, 3, 5];
findKthLargest(nums, 3);
console.log(nums);
