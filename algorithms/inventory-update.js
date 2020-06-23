// Working solution
function updateInventory(arr1, arr2) {
    const updatedInvArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.flat().includes(arr2[i][1])) {
            let index = arr1.findIndex(arr => arr[1] === arr2[i][1])
            updatedInvArr.push([arr1[index][0] + arr2[i][0], arr2[i][1]])
        }   else {
            updatedInvArr.push(arr2[i]);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.flat().includes(arr1[i][1])) {
            updatedInvArr.push(arr1[i])
        }
    }
    return updatedInvArr.sort((a, b) => a[1] > b[1] ? 1 : -1);
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