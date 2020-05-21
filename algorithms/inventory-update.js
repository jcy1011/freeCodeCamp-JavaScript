// Inventory output is incomplete. It does not include items in existing
// inventory (arr1) that had no additions. Also need to sort it
function updateInventory(arr1, arr2) {
    const updatedInvArr = [];
    const flatArr1 = arr1.flat()
    // console.log(flatArr1);
    for (let i = 0; i < arr2.length; i++) {
        if (flatArr1.includes(arr2[i][1])) {
            // console.log('MORE:', arr2[i][1]);
            let index = arr1.findIndex(arr => arr[1] === arr2[i][1])
            // console.log(arr1[index][0])
            updatedInvArr.push([arr1[index][0] + arr2[i][0], arr2[i][1]])
        }   else {
            // console.log('NEW:', arr2[i][1]);
            updatedInvArr.push(arr2[i]);
        }
        // updatedInvArr.push(arr1.filter(arr => !flatArr1.includes(arr2[i][1])))
    }
    console.log(updatedInvArr);
    return; // sorted arr
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

console.log();