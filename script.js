// easy examples

// Different kinds of loops in JavaScript with examples

// 1. For Loop - Best for known iteration counts
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// 2. While Loop - Use when the number of iterations is unknown
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// 3. Do-While Loop - Executes at least once
let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);

// 4. For...of Loop - Iterates over iterable objects (arrays, strings, etc.)
const array = ['apple', 'banana', 'cherry'];
for (const fruit of array) {
    console.log("For...of Loop fruit: " + fruit);
}

// 5. For...in Loop - Iterates over enumerable properties of an object
const objekt = {a: 1, b: 2, c: 3};
for (const key in objekt) {
    console.log("For...in Loop key: " + key + ", value: " + objekt[key]);
}

// 6. Break statement example
for (let m = 0; m < 5; m++) {
    if (m === 3) break;
    console.log("Break example, m: " + m);
}

// 7. Continue statement example
for (let n = 0; n < 5; n++) {
    if (n === 2) continue;
    console.log("Continue example, n: " + n);
}


// 8. Nested Loops - Loop inside another loop
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 2; y++) {
        console.log("Nested Loop x: " + x + ", y: " + y);
    }
}


// 9. Using a loop with a function
function printNumbers(limit) {
    for (let num = 0; num < limit; num++) {
        console.log("Number: " + num);
    }
}
printNumbers(5);

// 10. Using a loop with an array method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log("Array number: " + number);
});

// 11. Using a loop with a string
const str = "Hello";
for (let char of str) {
    console.log("Character: " + char);
}   

// 12. Using a loop with a Set
const mySet = new Set([1, 2, 3, 4]);
for (const value of mySet) {
    console.log("Set value: " + value);
}

// 13. Using a loop with a Map
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [key, value] of myMap) {
    console.log("Map key: " + key + ", value: " + value);
}

// 14. Using a loop with a generator function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFunction();
for (const value of gen) {
    console.log("Generator value: " + value);
}

// 15. Using a loop with async/await
async function asyncLoop() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        console.log("Async Loop iteration: " + i);
    }
}   
asyncLoop().then(() => console.log("Async loop completed"));

// 16. Using a loop with Array.prototype.map
const mappedArray = [1, 2, 3].map(num => {
    console.log("Mapped number: " + num);
    return num * 2; // Example transformation
});
console.log("Mapped Array: ", mappedArray);

// 17. Using a loop with Array.prototype.filter
const filteredArray = [1, 2, 3, 4, 5].filter(num => {
    console.log("Filtering number: " + num);
    return num > 2; // Example condition
});
console.log("Filtered Array: ", filteredArray);

// 18. Using a loop with Array.prototype.reduce
const reducedValue = [1, 2, 3, 4].reduce((acc, num) => {
    console.log("Reducing number: " + num);
    return acc + num; // Example accumulation
}, 0);
console.log("Reduced Value: ", reducedValue);

// 19. Using a loop with Array.prototype.some
const hasEven = [1, 2, 3, 4].some(num => {
    console.log("Checking if number is even: " + num);
    return num % 2 === 0; // Example condition
});
console.log("Array has even number: ", hasEven);







//advanced examples - some




// 1. For Loop - Sum only even numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}
console.log("Sum of even numbers:", evenSum);

// 2. While Loop - Find the first number greater than 5
let idx = 0;
let found = null;
while (idx < numbers.length) {
    if (numbers[idx] > 5) {
        found = numbers[idx];
        break;
    }
    idx++;
}
console.log("First number greater than 5:", found);

// 3. Do-While Loop - Remove elements from array until only odd numbers remain
let filtered = [...numbers];
let removed = [];
do {
    if (filtered[0] % 2 === 0) {
        removed.push(filtered.shift());
    } else {
        break;
    }
} while (filtered.length > 0);
console.log("Removed even numbers from start:", removed);
console.log("Remaining numbers:", filtered);

// 4. For...of Loop - Capitalize all fruit names
const fruits = ['apple', 'banana', 'cherry'];
const capitalized = [];
for (const fruit of fruits) {
    capitalized.push(fruit.charAt(0).toUpperCase() + fruit.slice(1));
}
console.log("Capitalized fruits:", capitalized);

// 5. For...in Loop - Invert keys and values of an object
const object = {a: 1, b: 2, c: 3};
const inverted = {};
for (const key in object) {
    inverted[object[key]] = key;
}
console.log("Inverted object:", inverted);

// 6. Nested Loops - Find all pairs of numbers that sum to 10
const pairs = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === 10) {
            pairs.push([numbers[i], numbers[j]]);
        }
    }
}
console.log("Pairs that sum to 10:", pairs);

// 7. Using a loop with a function - Calculate factorial of a number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", factorial(5));

// 8. Using a loop with an array method - Double each number in an array
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// 9. Using a loop with a string - Count vowels in a string
const str = "Hello World";
let vowelCount = 0;
for (const char of str) {
    if ('aeiouAEIOU'.includes(char)) {
        vowelCount++;
    }
}
console.log("Number of vowels in string:", vowelCount);

// 10. Using a loop with a Set - Find common elements in two sets
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const common = [];
for (const value of setA) {
    if (setB.has(value)) {
        common.push(value);
    }
}
console.log("Common elements in sets:", common);

// 11. Using a loop with a Map - Create a new map with squared values
const originalMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const squaredMap = new Map();
for (const [key, value] of originalMap) {
    squaredMap.set(key, value * value);
}
console.log("Squared Map:", Array.from(squaredMap.entries()));