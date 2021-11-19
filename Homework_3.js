//1

function changeCollection() {
  let res = [];
  for (let i = 0; i < arguments.length; i += 1) {
    arguments[i].shift();
    res.push(arguments[i]);
  }
  return res;
}
console.log(
  changeCollection([1, 2, 3, 4], ["apple", "banana", "qiwi"], ["hi", "bye"])
);

//2

const users = [
  { name: "Bob", age: 13, gender: "male" },
  { name: "Anne", age: 25, gender: "female" },
  { name: "Jake", age: 16, gender: "male" },
];

const items = ["a", "b", "c", "d"];

const addNew = (arr) => {
  return [...arr].map((el) => {
    el["items"] = ["a", "b", "c", "d"];
    return el;
  });
};

console.log(addNew(users));
console.log(users);

//3

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomElement([11, 22, 33, 44, 55]));
