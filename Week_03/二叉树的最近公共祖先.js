/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 递归解法：
 * 1：左、右子树均能找到，则说明p,q在当前root节点两侧，返回root2：左子树找到p或q，右子树没有找到，返回左子树节点查询结果3：右子树找到p或q，左子树没有找到，返回右子树节点查询结果
 */

let lowestCommonAncestor = function(root, p, q) {
    // 递归终止条件
    if (root === null || root === p || root ===q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    return left != null ? left : right;
};
console.log(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1))


