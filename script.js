// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object



const ol = document.querySelector("ol");


// --> JSON Stringify

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                     {"name": "Patrick","age": 34,"isEmployed": false},
//                     {"name": "Squidward","age": 50,"isEmployed": true},
//                     {"name": "Sandy","age": 27,"isEmployed": false}]`;

// const jsonString = JSON.stringify(people);

// const parsedData = JSON.parse(jsonPerson);

// console.log(parsedData);


// fetch("/json-project/people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))
//     .catch(error => console.error(error));

let output = "";
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach((value, index) => {
        output += `<li id="person-${index + 1}">${value.name}'s age is ${value.age} and Employed status is ${value.isEmployed}.</li>`;
        ol.innerHTML = output;
    }))
    .catch(error => console.error(error));