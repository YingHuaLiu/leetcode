/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 */
var diameterOfBinaryTree = function (root) {
    // 只有一个节点或没有节点时，直径是0
    let res = 0;

    function dfs(root) {
        if (!root) {
            return 0;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        // 比较目前记录的最长直径和当前节点的最长直径进行比较
        res = Math.max(res, left + right);
        // 返回当前节点的深度
        return Math.max(left, right) + 1;
    }

    dfs(root)
    return res
};
