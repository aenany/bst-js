function Node(val) {
    var currentNode = this;
    currentNode.left = null;
    currentNode.right = null;
    currentNode.value = val;

}

Node.prototype.visit = function () {
    var currentNode = this;
    if (currentNode.left !== null) {
        currentNode.left.visit();
    }
    console.log(currentNode.value);
    if (currentNode.right !== null) {
        currentNode.right.visit();
    }
};


Node.prototype.search = function (val) {
    var currentNode = this;
    if (val === undefined || val === null) {
        console.error('A definitive value was not provided for the search');
        return;
    }
    if (currentNode.value == val) {
        return currentNode;
    } else if (val < currentNode.value && currentNode.left !== null) {
        return currentNode.left.search(val);
    } else if (val > currentNode.value && currentNode.right !== null) {
        return currentNode.right.search(val);
    } else {
        console.warn('No result was found!');
    }
};

Node.prototype.addNode = function (n) {
    var currentNode = this;
    if (n.value < currentNode.value) {
        if (currentNode.left === null) {
            currentNode.left = n;
        } else {
            currentNode.left.addNode(n);
        }
    } else {
        if (currentNode.right === null) {
            currentNode.right = n;
        } else {
            currentNode.right.addNode(n);
        }
    }
};
