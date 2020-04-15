function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// inputs = 1 array of objects, 1 object
// outputs = 1 array of object(s)

// simple mechanical solution by hand, pseudocode

// for loop to go through array
