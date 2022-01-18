// 双指针，从两端向中心遍历，每次移动值小的指针
function maxArea(height) {
  let left = 0, right = height.length - 1;
  let area = 0;
  while (left < right) {
    let min = Math.min(height[left], height[right]);
    area = Math.max(area, min * (right - left));
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
}
