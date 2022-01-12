// 堆排序
const heapSort = array => {
  // 初始化大顶堆，从第一个非叶子结点开始
  for (let i = array.length >> 1 - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
  for (let i = array.length - 1; i > 0; i--) {
    // 根节点与最后一个节点交换
    [array[0], array[i]] = [array[i], array[0]];
    // 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
    heapify(array, 0, i);
  }
  return array;
};

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
const heapify = (nums, i, length) => {
  // 左孩子节点和右孩子节点
  let l = i * 2 + 1, r = i * 2 + 2;
  let largest = i;
  if(l < length && nums[l] > nums[largest]) {
    largest = l;
  }
  if(r < length && nums[r] > nums[largest]) {
    largest = r;
  }
  if(largest !== i) {
    // 将l/r中较大的节点与当前i节点交换
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    // 因为当前节点被替换了，所以largest节点可能不满足堆的性质，需要对largest为堆顶的堆进行调整
    heapify(nums, largest, length);
  }
};
