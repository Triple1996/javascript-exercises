const findTheOldest = function(people) {
    let ageList = [];
    console.log("Hello World");

    for (const person of people){
        let birth, death;

        birth = person.yearOfBirth;
        
        if (!person.yearOfDeath)
            death = new Date().getFullYear();
        else 
            death = person.yearOfDeath;

        let age = death - birth;
        ageList.push(age);
    }

    let oldest = findMax(people, ageList)
    return oldest;
}


function findMax(people, ageList){
    let oldestIndex = 0;
    
    for (let i = 1; i < ageList.length; i++){
        if (ageList[i] > ageList[oldestIndex])
            oldestIndex = i;
    }
    return people[oldestIndex];
}

// Do not edit below this line
module.exports = findTheOldest;
