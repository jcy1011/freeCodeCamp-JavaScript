const entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

// NOTE: this implementation relies on a global variable
// instead have entities as parameter
// user should pass an object with all entities
// didn't do becasue I don't want to break fCC testing

// console.log(entities['&']);

function convertHTML(str) {
  const arr = str.split('');
  // console.log(arr);
  // console.log(Object.keys(entities)[0]);
  // console.log(arr[6]);
  // console.log(Object.keys(entities).includes(arr[6]));
  // console.log(entities[arr[6]]);
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(entities).includes(arr[i])) {
      str = str.replace(arr[i], entities[arr[i]])
    }
  }
  console.log(str);
  return str;
}

convertHTML("Dolce & Gabbana");


console.log();
console.log();
console.log();
console.log();
console.log();


// & = &amp;
// < = &lt;
// > = &gt;
// " = &quot;
// ' = &#39;

// &amp;
// &lt;
// &gt;
// &quot;
// &#039;