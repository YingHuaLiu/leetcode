var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if(!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]] + 1;
    }
  }
  let entries = Object.entries(map);
  let length = entries.length;
  for (let i = (length >> 1) - 1; i >= 0; i--) {
    maxHeapify(entries, i, length);
  }
  for (let i = entries.length-1; i >= entries.length-k; i--) {
    [entries[0], entries[i]] = [entries[i], entries[0]];
    length--;
    maxHeapify(entries, 0, length);
  }
  return entries.slice(entries.length - k).map(item=>item[0]);
};

function maxHeapify(nums, i, heapSize) {
  let left = i * 2 + 1, right = i * 2 + 2, largest = i;
  if(left < heapSize && nums[left][1] > nums[largest][1]) {
    largest = left;
  }
  if(right < heapSize && nums[right][1] > nums[largest][1]) {
    largest = right;
  }
  if(largest !== i) {
    [nums[largest], nums[i]] = [nums[i], nums[largest]];
    maxHeapify(nums, largest, heapSize);
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
