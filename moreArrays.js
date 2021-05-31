// Declare a variable named person that holds an empty array
const persons = [];
// Declare arbitrary variables reflecting a person's attributes
let myname = "Don Osongo";
let age = 24;
let gender = "Male";
let nationality = "Kenyan";

// Add the above properties to an object named donPerson

/* In ES6 and above, if property names match value names (variables)
   then you can shorten or reduce the assignment of key-value
   pairs by simply referecning the variable names separated by
   commas if more than one
*/
let donPerson = {
  /* age: age,
  gender: gender,
  nationality: nationality
  */
  // The above ca be reduced to...
  myname, age, gender, nationality
};
// Using the dot notation you can create new properties for an existing object
//donPerson.name = name;
//console.log(donPerson);
// Add donPerson to the persons array
persons.push(donPerson);
console.log(persons);