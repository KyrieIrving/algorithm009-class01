/**
 * @param {TreeNode} root
 * @return {number[]}
 * 左 - 根 -右
 */
var inorderTraversal = function (root) {
    if (root) {
        return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    } else {
        return []
    }

};
console.log(inorderTraversal([1, null, 2, 3]))
