"use strict";

//1

const car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log("need repair");
  car.needRepair = true;
} else {
  console.log("do not need repair");
  car.needRepair = false;
}

//2

const item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%",
};
if (isNaN(item.price) && isNaN(item.discount)) {
  item.priceWithDiscount = "100";
  item.price = parseFloat(item.price);
  item.discount = parseFloat(item.discount);
  item.priceWithDiscount = parseFloat(item.price - item.discount);

  console.log(item);
} else {
  if (item.indexOf(discount) != -1) {
    item.price = parseFloat(item.price);
    console.log(item.price);
  }
}

//3

const product = {
  name: "Яблоко",
  price: "10$",
};
product.price = parseInt(product.price);

const min = 10; // минимальная цена
const max = 20; // максимальная цена

if (product.price <= max && product.price >= min) {
  console.log(product.name);
} else {
  console.log("товар не найден");
}
