// //1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오

// function fn1(name){
//   console.log(`1번 : Hello ${name}!`);
// }

// fn1("김동준");

// //2.    <li>두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오</li>

// function fn2(num1, num2){
//   const n1 = Number(num1); // 문자열1 을 숫자로 변환
//   const n2 = Number(num2); // 문자열2 를 숫자로 변환
//   console.log(`num1 + num2 = ${n1 + n2}`);
// }

// fn2("3","4");

// //3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성

// const fn3 = (num3, num4)=>{
//   const n3 = Number(num3);
//   const n4 = Number(num4);
//   console.log(`num3 * num4 =  ${n3 * n4}`)

// };

// fn3("5", "7");

// //4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 
// //"첫 번째 숫자가 더 큽니다"를 출력하고,
// //그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오

// const fn4 = (num5,num6)=>{
//   if(Number(num5) > Number(num6)){
//     console.log("첫 번째 숫자가 더 큽니다")
//   } else {
//     console.log("두번째 숫자가 더 크거나 같습니다")
//   }
// };

// fn4("8", "5");

// //5.문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오

// const fn5 = (input1)=>{
//   console.log(input1.length)
// };

// fn5("안녕하세요");

// //6. 문자열과 반복 횟수를 매개변수로 받아, 
// // 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오

// const fn6 = (input2,count1) => {
//  for(let i = 0; i < count1; i++){
//   console.log(`${input2}`)
//  }
// };

// fn6("반가워요",5);


// // 7.숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를
// // true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오

// const fn7 = (num7) => {
//   let flag; 
//   if (Number(num7) % 2 === 0) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   return flag;
// };

// const result = fn7(5);
// console.log(result); 

// // 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오

// const fn8 = (num8, num9, num10) => {
//   let largest;
//   if (num8 >= num9 && num8 >= num10) {
//     largest = num8;
//   } else if (num9 >= num8 && num9 >= num10) {
//     largest = num9;
//   } else {
//     largest = num10;
//   }
//   return largest;
// };

// const largestNumber = fn8(10, 5, 8);
// console.log(largestNumber); // 출력: 10


// // 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
// const fn9 = (list) => {
// console.log(list[1]);
// }
// const list = ["사과", "딸기", "바나나"];
// fn9(list);

// // 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을
// // 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
// const fn10 = (ilst2) => {
//   let sum = 0;
//   let avg;
//   for (let i = 0; i < ilst2.length; i++) { 
//     sum += ilst2[i]; 
//   }
//   avg = sum / ilst2.length; 
//   return { 합계: sum, 평균: avg };
// };

// const list2 = [5, 7, 8, 9, 10];
// const result10 = fn10(list2);
// console.log(result10); 



// // 11.숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 
// // 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

// const calculate = (num1, num2, operation) => {
//   return operation(num1, num2);
// };

// // 덧셈 연산 함수 정의
// const add = (a, b) => {
//   return a + b;
// };

// // 뺄셈 연산 함수 정의
// const subtract = (a, b) => {
//   return a - b;
// };

// // 곱셈 연산 함수 정의
// const multiply = (a, b) => {
//   return a * b;
// };

// // 나눗셈 연산 함수 정의
// const divide = (a, b) => {
//   if (b === 0) {
//     return "0으로 나눌 수 없습니다.";
//   }
//   return a / b;
// };

// // 함수 호출 및 결과 출력
// const resultAdd = calculate(5, 3, add);
// console.log(`덧셈 결과: ${resultAdd}`); // 출력: 덧셈 결과: 8

// const resultSubtract = calculate(10, 4, subtract);
// console.log(`뺄셈 결과: ${resultSubtract}`); // 출력: 뺄셈 결과: 6

// const resultMultiply = calculate(2, 6, multiply);
// console.log(`곱셈 결과: ${resultMultiply}`); // 출력: 곱셈 결과: 12

// const resultDivide = calculate(9, 3, divide);
// console.log(`나눗셈 결과: ${resultDivide}`); // 출력: 나눗셈 결과: 3

// const resultDivideByZero = calculate(7, 0, divide);
// console.log(`나눗셈 결과 (0으로 나누기): ${resultDivideByZero}`); // 출력: 나눗셈 결과 (0으로 나누기): 0으로 나눌 수 없습니다.



// // 12. 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 
// // 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

// const greet = (name, greetingFunction) => {
//   greetingFunction(name);
// };

// // 일반적인 인사말 출력 함수 정의
// const sayHello = (name) => {
//   console.log(`안녕하세요, ${name}님!`);
// };

// // 좀 더 격식 있는 인사말 출력 함수 정의
// const sayGoodMorning = (name) => {
//   console.log(`${name}님, 좋은 아침입니다!`);
// };

// // 저녁 인사말 출력 함수 정의
// const sayGoodEvening = (name) => {
//   console.log(`${name}님, 편안한 저녁 되세요.`);
// };

// // 함수 호출 및 결과 출력
// greet("홍길동", sayHello); // 출력: 안녕하세요, 홍길동님!
// greet("김철수", sayGoodMorning); // 출력: 김철수님, 좋은 아침입니다!
// greet("이영희", sayGoodEvening); // 출력: 이영희님, 편안한 저녁 되세요.

// // 익명 함수를 사용하여 호출
// greet("박지성", (name) => {
//   console.log(`${name} 선수, 환영합니다!`); // 출력: 박지성 선수, 환영합니다!
// });

// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`1번 : Hello, ${name}!`);
}

fn1("미현");

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function addNumbers(a, b) {
  return a + b;
}

console.log("2번 : ", addNumbers(3, 5));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
const mutiply = (a, b) => a * b;
console.log( "3번 : ", mutiply(2, 5) );

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 
// "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function compareNumbers(a, b) {
  if(a > b) {
    console.log("4번 : 첫번째 숫자가 더 큽니다");
  } else {
    console.log("4번 : 두번째 숫자가 더 크거나 같습니다");
  }
}

compareNumbers(5, 3);
compareNumbers(2, 4);


// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
function printLength(str) {
  console.log("5번 : ", str.length);
}

printLength("Javascript");  // 10

// 6.문자열과 반복 횟수를 매개변수로 받아, 
// 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오

function repeatString(str, num) {

    let result = "";

    for(let i = 0; i < num; i++) {
      result += str;
    }
    console.log("6번 : ", result);

}

repeatString("Hello", 3);

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 
// true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function isEven(num) {
  return num % 2 === 0;
}

console.log("7번 :", isEven(4)); // true
console.log("7번 :", isEven(7)); // true

// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 
// 함수를 선언 및 정의하고 호출하시오
function findMax(a, b, c) {
  let max = a;

  if(max < b) {
    max = b;
  }

  if(max < c) {
    max = c;
  }

  return max;
  
  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  // return Math.max(a, b, c);
}

console.log("8번 : ", findMax(1, 5, 3));

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 
// 화살표 함수를 선언 및 정의하고 호출하시오
const getFirstElement = (arr) => { return arr[0] };
console.log("9번 : ", getFirstElement([10, 20, 30]) );

// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 JS 객체 형태로 반환하는 
// 함수를 선언 및 정의하고 호출하시오
function sumAndAverage(arr) {

  // let sum = 0;
  // for(let i=0; i<arr.length; i++) {
  //   sum += arr[i];
  // }
      // [1,2,3,4,5]
  let sum = arr.reduce((acc, curr) => { 
    return acc + curr 
  });
 // 배열.reduce(callback함수) : JS 배열의 메서드로(함수), 배열의 모든 요소를 순회하면서
 // 하나의 결과값을 누적하여 반환
 // acc (accumulator) : 이전 콜백 호출에서 반환된 값 (누산기 - 결과를 누적)
 // curr (currentValue) : 현재값 - 현재 처리중인 배열 요소 값

  let avg = sum / arr.length;

  return { "합계" : sum, "평균" : avg };

}

console.log("10번 : ", sumAndAverage([1,2,3,4,5]));


// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 
// 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

console.log( "11번: ", calculate(5, 3, add) );
console.log( "11번: ", calculate(5, 3, minus) );

// 12. 1. 사람의 이름과 2. 인사말을 출력하는 함수를 [매개변수]로 받아, 
// 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log(`12번 : Hello, ${name}`);
}

function sayGoodbye(name) {
  console.log(`12번 : Bye, ${name}`);
}

greet("길동", sayHello); 
greet("영희", sayGoodbye); 