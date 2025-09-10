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

// Broken users for Exercises 5 and 6
const brokenUsers = [
  { id: 1, name: "", age: 23 },
  { id: 2, name: "", age: 45 },
  { id: 3, name: "", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
];

// HELPER FUNCTIONS for this exercise

/**
 * Reusable GUARD FUNCTION - Checks if the user object has a valid name property.
 * @param {Object} user - The user object to check.
 * @returns {boolean} - Returns true if the name is valid, false otherwise.
 */
const validateUser = (userObject, locationId) => {
  if (!userObject.name) {
    let errorMessage = "ERROR: No name found";
    const errorDisplay = document.getElementById(locationId);
    errorDisplay.innerHTML += `<li>${errorMessage}</li>`;
    console.error(errorMessage);
    return false;
  }
  return true;
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
  const locationId = "names-list";
  if (validateUser(user, locationId)) {
    console.log(user.name);
    createListItem(user, locationId);
  }
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
users.map((user) => {
  const locationId = "young-characters-list";

  if (validateUser(user, locationId)) {
    console.log(user.name);

    if (user.age < 40) {
      createListItem(user, locationId);
    }
  }
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
// Louie's Note: Please see the HELPER METHODS area for createListItem function. I have to put them above because I used it on the other parts as well.
users.map((user) => {
  const locationId = "function-list";

  if (validateUser(user, locationId)) {
    createListItem(user, locationId);
  }
});

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

const filterByAge = (usersArray, ageThreshold) => {
  const locationId = "age-filter-list";

  for (const userObject of usersArray) {
    if (validateUser(userObject, locationId)) {
      if (userObject.age < ageThreshold) {
        createListItem(userObject, locationId);
      }
    }
  }
};

filterByAge(users, 35);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
// Louie's Note: Please see the HELPER METHOD area for validateUser function. Like earlier,  I have to put them above because I used it on the other parts as well.

validateUser(brokenUsers[0], "error-messages");

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
// Louie's Note: I opted to add another function to accomodate locationId requirements.

/**
 * Filters users by age and displays results in a specified HTML element.
 * @param {Array} usersArray - The array of user objects to filter.
 * @param {number} ageThreshold - The age threshold for filtering users.
 * @param {string} resultId - The ID of the HTML element to display results.
 * @param {string} errorId - The ID of the HTML element to display error messages.
 */
const filterByAgeWithLocation = (
  usersArray,
  ageThreshold,
  resultId,
  errorId
) => {
  for (const userObject of usersArray) {
    if (validateUser(userObject, errorId)) {
      if (userObject.age < ageThreshold) {
        createListItem(userObject, resultId);
      }
    } else {
      const errorDisplay = document.getElementById(errorId);
      errorDisplay.innerHTML += `<li>ID no. ${userObject.id} has a missing name.</li>`;
      continue;
    }
  }
};

filterByAgeWithLocation(
  brokenUsers,
  60,
  "broken-array-list",
  "broken-array-errors"
);
