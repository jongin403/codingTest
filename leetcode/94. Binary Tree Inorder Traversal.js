// Leet Code
// #94. Binary Tree Inorder Traversal

function main(){
    // Input // Output
    var array = [3,9,20,null,null,15,7]; // Output: [1,3,2]
    // this line creates the tree based on the array
    
    const nodes = new Array(array.length);

    for(let i = 0; i < array.length; i++){
        nodes[i] = array[i]==null ? null : new TreeNode(array[i]);
        //console.log(nodes[i]);
    }
    connectBinaryTree(nodes);
    const root = nodes[0];

    console.log(inorderTraversal(root));
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://programmerall.com/article/62951124299/
function connectBinaryTree(nodes){
    let len = nodes.length;
    flag = 0;
    for(let i = 0; 2 * i + 1 < len - 1; i++){
        if(nodes[i] != null){
            nodes[i].left = nodes[ 2 * i + 1 - 2 * flag ];
            nodes[i].right = 2 * i + 2 == len ? null : nodes[ 2 * i + 2 - 2 * flag ];
        }else{
            flag++;
        }
    }
    // print
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