"use strict";

//1

//2

const props = {
  user: {
    login: "Admin",
    password: "1234",
  },
  info: {
    protocol: "https",
    host: "123.45.6.7",
    port: "1234",
  },
};

let { login, password } = props.user;
let { protocol, host, port } = props.info;

//3

const coordinates = [12, 134, 567, 456, 13, 14];

console.log(12);

//4

const cars = [
  { id: 1, model: "Mercedes-Benz", speed: 255 },
  { id: 2, model: "BMW", speed: 260 },
  { id: 3, model: "Skoda", speed: 180 },
  { id: 4, model: "Nissan", speed: 200 },
  { id: 5, model: "Mazda", speed: 240 },
];
