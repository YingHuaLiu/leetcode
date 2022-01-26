// 单调栈
// https://leetcode-cn.com/problems/daily-temperatures/solution/leetcode-tu-jie-739mei-ri-wen-du-by-misterbooo/
function dailyTemperatures(temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    // 如果stack不为空，并且当前元素比栈顶温度高
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      // 则推出当前栈顶元素
      let index = stack.pop();
      // 记录栈顶元素的间隔
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// 暴力法
// function dailyTemperatures(temperatures) {
//   let res = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if(temperatures[j] > temperatures[i]) {
//         res[i] = j - i;
//         break;
//       }
//     }
//   }
//   return res;
// }
