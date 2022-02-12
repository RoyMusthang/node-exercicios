export function greeter(name: string) {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(D: number, d: number) {
  const result: number = (D * d) / 2;
  return result;
}

export function trapézio(B: number, b: number, height: number) {
  const result: number = ((B * b) * height) / 2;
  return result;
}

export function raio(r: number) {
  const pi: number = 3.14;
  const result: number = pi * (r ** 2);
  return result;
}
