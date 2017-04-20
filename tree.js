function Tree(){
    var currentTree = this;
    currentTree.root = null;
}

Tree.prototype.traverse = function(){
    var currentTree = this;
    currentTree.root.visit();
}

Tree.prototype.search = function(val){
    var currentTree = this;
    if(val == null || val == undefined){
        console.error('Either no search criteria was provided, or the provided criteria was invalid!');
        return;
    } else {
        var result = currentTree.root.search(val);
        return result;
    }
}

Tree.prototype.addValue = function(val){
    var currentTree = this;
    var node = new Node(val);
    if(currentTree.root == null){
        currentTree.root = node;
    } else {
        currentTree.root.addNode(node);
    }
}