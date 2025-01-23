const findTheOldest = function(persons) {
    let oldestPerson;
    let highestAge = 0;
    let age;

    for (person of persons) {
        let highestYear = 0;
        if (!("yearOfDeath" in person)) {
            highestYear = 2025;
        }
        else {
            highestYear = person["yearOfDeath"];
        }
        age = highestYear - person["yearOfBirth"]
        if (age > highestAge) {
            oldestPerson = person;
            highestAge = age;
        }
    }

    return oldestPerson;

};

/* const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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
  findTheOldest(people); */

// Do not edit below this line
module.exports = findTheOldest;
