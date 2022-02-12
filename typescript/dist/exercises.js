"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raio = exports.trapézio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losango(D, d) {
    const result = (D * d) / 2;
    return result;
}
exports.losango = losango;
function trapézio(B, b, height) {
    const result = ((B * b) * height) / 2;
    return result;
}
exports.trapézio = trapézio;
function raio(r) {
    const pi = 3.14;
    const result = pi * (r ** 2);
    return result;
}
exports.raio = raio;
