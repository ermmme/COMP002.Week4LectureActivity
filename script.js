let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);

console.log(numbers[numbers.length - 1]);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.push(6, 7, 8, 9, 10);

console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);

let myString = "What the heck!!!";
console.log(myString.length);
