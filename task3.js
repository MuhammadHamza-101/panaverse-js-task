const name = "Muhammad Hamza"

console.log(name.toUpperCase());
console.log(name.toLowerCase());

const newName = "Muhammad Hamza";
const temp = newName.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(temp);