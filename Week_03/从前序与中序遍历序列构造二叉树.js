/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 递归解决：1：前序遍历 根-左-右， 中序遍历 左-根-右2：可以看出preorder数组的第一个元素都是子节点的根元素， 3：找到根元素在inorder中对应的下标，左边为preorder当前根元素的左子树
右边为preorder当前根元素的右子树
 */
let buildTree = function (preorder, inorder) {
    let build = (inorder) => {
        if (!inorder || !inorder.length){
            return null;
        }
        let temp = preorder.shift(), // 取出根元素
        mid = inorder.indexOf(temp);
        let root = new TreeNode(temp);
        root.left = build(inorder(0, mid));
        root.right = build(inorder(mid+1));
        return root;
    }
    return build(inorder);
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));


let rescurson = function (level, n, s, arr) {
    // 递归终止条件
    if (leavl > n) {
        return arr;
    }
    // 处理当前逻辑
    process(level, data);
    // 向下递归
    rescurson(level+1, p1,p2);
    // 重置全局的参数

}
