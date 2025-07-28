// 5번 : 화살표 함수(Arrow Function)
// ES6에서 도입된 간결한 함수 작성 방식

const { useCallback } = require("react");

// 익명 함수
const add1 = function(num1, num2){
  return num1 + num2;
};

// 화살표

const add2 = (num1, num2) => num1 + num2;
console.log(add2(100,200));

// 이름과 나이를 매개변수로 받아 출력하는 화살표 함수
// 함수명 : printInfo
// 매개변수 : 2개, 리턴값 : x

// 익명함수 1

const printInfo1 = function(name, age){
  console.log(`제 이름은 ${name}이고 나이는 ${age} 입니다.`);
};


// 화살함수2
const printInfo2 = (name, age) => console.log(`제 이름은 ${name}이고 나이는 ${age} 입니다.`);

printInfo1("이름", 1);

// 매개변수 1개인 경우 소괄호 생략가능
const square = x => x * x;

// 0개인 경우 빈 소괄호 사용
const greet = () => "hello! 2025";

// 여러줄 코드가 필요한 경우 중괄호 사용
const sumArray = (arr) => {
  let sum = 0;
  for(let i of arr){
    sum += i;
  }
  return sum;
}

// 두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기(화살표 함수만 이용)

const mul = (num1, num2)=> console.log((num1 * num2) * 3);
mul(2,2);

// 두 정수의 곱세을 구한 뒤 결과에 3을 곱해서 출력하기(화살표 함수와 콜백 함수 이용)
const mul1 = (num1, num2, callback) => {
  const product = num1 * num2;
  callback(product);
}

const multi = result=>console.log(result * 3);

mul1(10,20,multi);