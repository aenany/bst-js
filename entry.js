var counter, randomValue, constructedNode;
var theTree = new Tree();

for (counter = 0; counter < 10; counter++){
    randomValue = Math.floor(Math.random()* 100);    
    theTree.addValue(randomValue);    
}

console.log(theTree);

theTree.traverse();


console.info('Binary Search Tree: theTree');
