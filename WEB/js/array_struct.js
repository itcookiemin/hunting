/* 비구조화 할당 / 구조분해 할당 */
console.log(`/* 비구조화 할당 / 구조분해 할당 */`);

// Array
console.log("\n------ Array ------");
console.log("const [a, b] = [10, 20];");
const [a, b] = [10, 20];
console.log("a", a); // 10
console.log("b", b); // 20

// Object
console.log("\n------ Object ------");
console.log("const { a2, b2 } = { a2: 10, b2: 20 };");
const { a2, b2 } = { a2: 10, b2: 20 };
console.log("a2", a2); // 10
console.log("b2", b2); // 20

console.log("\n------ 1. 배열 / 오브젝트의 나머지 값 할당 ------");
console.log(`
const arr_num = [10, 20, 30, 40, 50];
const [no1, no2, ...rest] = arr_num;`);
const arr_num = [10, 20, 30, 40, 50];
const [no1, no2, ...rest] = arr_num;
console.log("no", no1);
console.log("no", no2);
console.log("rest", rest); // [ 30, 40, 50 ]

console.log("\n------ 2. 배열의 일부 값 무시하여 할당 ------");
console.log(
  `const arr_num2 = [10, 20, 30, 40, 50];
const [start, , , , end] = arr_num2;`
);
const arr_num2 = [10, 20, 30, 40, 50];
const [start, , , , end] = arr_num2;
console.log("start", start);
console.log("end", end);

console.log("\n------ 3. 오브젝트 새로운 변수이름으로 할당 ------");
let obj2 = { a: 3, b: 5 };
let { a: aa = 10, b: bb = 20 } = obj2;
console.log(obj2[a]);
