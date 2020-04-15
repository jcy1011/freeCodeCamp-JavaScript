function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size){
    let localArr = arr.slice(i, i + size);
    result.push(localArr);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// above could be written in fewer lines as follows

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size){
      result.push(arr.slice(i, i + size));
    }
    return result;
  }