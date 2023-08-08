// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("numGreatThanTwo", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6;
      expect(numGreatThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    const fibLength2 = 10;
      expect(numGreatThanTwo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})
})

//ReferenceError: numGreatThanTwo is not defined
//Test Suites: 1 failed, 1 total

// b) Create the function that makes the test pass.

// Pseudo code:
// create a function with a variable name, make length the parameter.
// write a if/else conditional statement to determine the length under the first function for the numbers 0, 1, and 2.
// create a loop and store in a new array. 

// I have a 50/50 understanding of this. I honestly used stackoverflow, web articles from google, and prayed to god for a solution. The code works though....

const numGreatThanTwo = (length) => {
  if (length <= 0) {
    return [];
  } else if (length === 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  }

  const fibArray = [1, 1];
  for (let i = 2; i < length; i++) {
    const nextFib = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextFib);
  }

  return fibArray;
}

const fibLength1 = 6;
const fibSequence1 = numGreatThanTwo(fibLength1);
console.log(fibSequence1);

const fibLength2 = 10;
const fibSequence2 = numGreatThanTwo(fibLength2);
console.log(fibSequence2);

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total






// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("arrOfValues", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    };
      expect(arrOfValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      const studyMinutesWeek2 = {
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65
      };
      expect(arrOfValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})
})

//ReferenceError: arrOfValues is not defined
//Test Suites: 1 failed, 1 total


// b) Create the function that makes the test pass.

// Pseudo code:
// create a function with object as a parameter
// use object.values method to extract the values and use .sort to sort the return values into a new array in order from least to greatest.
// declares variables for each obj and call the arrOfValues function with an arguement


const arrOfValues = (obj) => {
  const values = Object.values(obj);
  values.sort((a, b) => a - b);
  return values;
}

const sortedWeek1 = arrOfValues(studyMinutesWeek1);
console.log(sortedWeek1);

const sortedWeek2 = arrOfValues(studyMinutesWeek2);
console.log(sortedWeek2);

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []


describe("accSum", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9];
      expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    const accountTransactions2 = [250, -89, 100, -96];
      expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    const accountTransactions3 = []
      expect(accSum(accountTransactions3)).toEqual([])
})
})

//ReferenceError: accSum is not defined
//Test Suites: 1 failed, 1 total

// b) Create the function that makes the test pass.

// Pseudo code:
//create a function to take in the array, use array as a parameter.
// create a variable to initialize 0 to keep track of the sum.
// create a empty array to store values
// iterate in a "for" loop to return values


function accSum(array) {
  let accumulatedSum = 0;
  const resultArray = [];

  for (const num of array) {
    accumulatedSum += num;
    resultArray.push(accumulatedSum);
  }

  return resultArray;
}

const accountTransactions1 = [100, -17, -23, -9];
const result1 = accSum(accountTransactions1);
console.log(result1); 

const accountTransactions2 = [250, -89, 100, -96];
const result2 = accSum(accountTransactions2);
console.log(result2); 

const accountTransactions3 = [];
const result3 = accSum(accountTransactions3);
console.log(result3); 

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total