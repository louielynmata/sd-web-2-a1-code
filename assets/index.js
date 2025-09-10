"use strict";
console.log("index.js loaded!");

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

/* REFERENCES
// Will go through all the elements - easier to remember
const element = document.querySelector("#element");

// Will only read the IDs - slight faster
const idElement = document.getElementById("el");

// Adding text
element.textContent = "Blah";
/*
// Will go through all the elements - easier to remember
const element = document.querySelector("#element");

// Will only read the IDs - slight faster
const idElement = document.getElementById("el");

// Adding text
element.textContent = "Blah";
*/

// HELPER METHODS for this exercise
/**
 * Reusable GUARD FUNCTION - Checks if the user object has a valid name property.
 * @param {Object} user - The user object to check.
 * @returns {boolean} - Returns true if the name is valid, false otherwise.
 */
const isArrayEmpty = (user) => {
  if (!user.name) {
    let errorMessage = "ERROR: No name found";
    return console.error(errorMessage);
  }
};

/**
 * REUSABLE CREATE LIST NAME CALLS - Creates a list item for a user and appends it to the specified list.
 * @param {Object} user - The user object containing the name.
 * @param {string} locationId - The ID of the HTML element to append the list item to.
 */
const createListItem = (user, locationId) => {
  const createdList = document.getElementById(locationId);
  createdList.innerHTML += `<li>${user.name}</li>`;
  return createdList;
};

// EXERCISES PROPER
// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.map((user) => {
  isArrayEmpty(user);

  console.log(user.name);
  createListItem(user, "names-list");
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
users.map((user) => {
  isArrayEmpty(user);
  console.log(user.name);

  if (user.age < 40) {
    createListItem(user, "young-characters-list");
  }
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
// Louie's Note: Please see the HELPER METHOD area for createListItem. I have to put them above because I used it on the other parts as well.
users.map((user) => {
  isArrayEmpty(user);
  createListItem(user, "function-list");
});

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

const filterByAge = (usersArray, ageThreshold) => {
  isArrayEmpty(usersArray);

  for (const userObject of usersArray) {
    if (userObject.age < ageThreshold) {
      createListItem(userObject, "age-filter-list");
    }
  }
};

filterByAge(users, 35);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
