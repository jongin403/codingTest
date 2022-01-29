// Leet Code
// #94. Binary Tree Inorder Traversal

function main(){
    // Input // Output
    root = [1,null,2,3]; // Output: [1,3,2]

    var tree = root.reduce((t, v) => t ? insertNode(t, v) : new TreeNode(v), null);
    console.log(inorderTraversal(tree));
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function insertNode(tree, data){
    
    let node = new TreeNode(data);
    
    if(!this.root) {
        this.root = node;
        return this;
    }

    let current = this.root;
    while (current) {
        if(data === current.data) {
            return;
        }
    
        if(data < current.data) {
            if(!current.left) {
                current.left = node;
                break;
            }
            current = current.left;
        }

        if(data > current.data) {
            if(!current.right) {
                current.right = node;
                break;
            }
            current = current.right;
        }
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if(!node) return;
        
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
};

main();