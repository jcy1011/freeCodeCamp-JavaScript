var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  let result = title
    .toLowerCase()
    // .split(" +")
    .split(/\W/)
    // .join("-");
    let result2 = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i]) {
            result2.push(result[i]);
        }
    }
  return result2.join("-");
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log(urlSlug(globalTitle));
console.log(urlSlug(" Winter Is  Coming") );
console.log();
console.log();


// USE .filter or .trim

function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}