interface personLayout {
    id: number;
    firstName: string;
    lastName: string;
}

const personArray: personLayout[] = [];

const addPerson = (id: number, firstName: string, lastName: string)=> {
    let personData = {} as personLayout;
    personData.id = id;
    personData.firstName = firstName;
    personData.lastName = lastName;
    personArray.push(personData);
}

addPerson(1, "amir", "karimi");

const showPersons = ()=> {
    personArray[0] ? console.log(personArray) : console.log('list nadarim')
}

showPersons();

const searchPerson = (value: string)=> {
    let result = personArray.find((item) => item.firstName === value || item.lastName === value);
    result ? console.log("person found") :  console.log("person not found");
}

searchPerson("amir")