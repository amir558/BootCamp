var personArray = [];
var addPerson = function (id, firstName, lastName) {
    var personData = {};
    personData.id = id;
    personData.firstName = firstName;
    personData.lastName = lastName;
    personArray.push(personData);
};
addPerson(1, "amir", "karimi");
var showPersons = function () {
    personArray[0] ? console.log(personArray) : console.log('list nadarim');
};
showPersons();
var searchPerson = function (value) {
    var result = personArray.find(function (item) { return item.firstName === value || item.lastName === value; });
    result ? console.log("person found") : console.log("person not found");
};
searchPerson("amir");
