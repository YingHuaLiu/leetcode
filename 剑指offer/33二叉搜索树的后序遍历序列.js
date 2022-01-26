var verifyPostorder = function (postorder) {
  function help(postorder, start, end) {
    if(start >= end) {
      return true;
    }
    let i = start;
    // 计算左子树
    while (postorder[i] < postorder[end]) {
      i++;
    }
    let j = i;
    // 计算右子树
    while (postorder[i] > postorder[end]) {
      i++;
    }
    // 如果合法，那么i一直++到end
    // 递归判断左右子树
    return i === end && help(start, i - 1) && help(j, end - 1);
  }

  return help(0, postorder.length - 1);
};


