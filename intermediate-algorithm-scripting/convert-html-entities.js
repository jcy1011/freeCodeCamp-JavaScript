const entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(entities).includes(arr[i])) {
      str = str.replace(arr[i], entities[arr[i]])
    }
  }
  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");

// NOTE: this implementation relies on a global variable
// instead have entities as a parameter
// user should pass an object with all entities
// didn't do because didn't want to break fCC testing