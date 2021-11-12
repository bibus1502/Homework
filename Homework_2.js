"use strict";

//1

let c = 0;

let result = c === 0 ? (c = 1) : c < 0 ? (c = "less then zero") : (c *= 10);
console.log(c);

//2

function reversedString(str) {
  let String = "";
  for (let x = str.length - 1; x >= 0; x--) {
    String += str[x];
  }
  return String;
}
reversedString("tseb eht ma i");

//3.1

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function evenNumbers(nums) {
  const res = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 !== 0) res.push(nums[i]);
  }
  return res;
}
evenNumbers(result);

//3.2
//Не получилось ¯\_(ツ)_/¯

//3.3

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function Numbers(numbers) {
  let x = [];
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    if (n % 2) x.push(n);
  }
  return x;
}
Numbers(result);

//4

function getCodeStringFromText(str) {
  let code = "";
  for (let i = 0; i < str.length; i++) {
    code += str.charCodeAt(i) + " ";
  }
  return code.trim();
}
getCodeStringFromText("hello");
