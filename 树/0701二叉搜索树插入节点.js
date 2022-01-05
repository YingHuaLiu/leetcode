// 迭代
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    let temp = root;
    while (temp) {
        if (val < temp.val) {
            if (temp.left) {
                temp = temp.left
            } else {
                temp.left = new TreeNode(val)
                break;
            }
        } else {
            if (temp.right) {
                temp = temp.right
            } else {
                temp.right = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};

// 递归
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val)
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    return root;
};
