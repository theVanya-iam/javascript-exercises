
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
     

const findTheOldest = people.sort(function(a,b) {
  const lastPerson = a.yearOfDeath - a.yearOfBirth;
  const nextPerson = b.yearOfDeath - b.yearOfBirth;
  return lastPerson > nextPerson ? -1 : 1;  //ternary operator that evaluates to -1 or 1; 

  //expanded version of the "if statement" above
  //if (lastPerson > nextPerson) {
  //  return -1;
  //} else {
  //  return 1;
  //}
  
});

console.table(findTheOldest);
