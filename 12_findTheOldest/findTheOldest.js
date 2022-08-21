const findTheOldest = function(people) {
    return people.reduce((eldest,person) => {
        let ageEldest = getAge(eldest.yearOfBirth, eldest.yearOfDeath);
        let agePerson = getAge(person.yearOfBirth, person.yearOfDeath);
        return (ageEldest>agePerson) ? eldest : person;
    })
};
function getAge(yearOfBirth,yearOfDeath)
{
    if(yearOfDeath === undefined)
    {
        return new Date().getFullYear() - yearOfBirth;
    }
    else
    {
        return yearOfDeath - yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
