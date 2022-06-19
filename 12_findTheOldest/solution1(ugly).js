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
     

const findTheOldest = function(people) {
let total = 0;
let OldestPerson = {};
people.reduce((prev, curr) => {
  if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
  total = (curr.yearOfDeath - curr.yearOfBirth);
  OldestPerson = curr;
  }
  return prev;
});
return OldestPerson;
};

console.log(findTheOldest(people));