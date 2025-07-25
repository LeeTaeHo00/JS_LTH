// // 3번 데이터 타입

// // number, boolan, string, undefined, Symbol, null

// // number
// console.log("number 타입");
// console.log(3.14, typeof 3.14, -50,  typeof(-50))
// console.log(Infinity, typeof Infinity); // 인피니티는 양수 음수 둘다 가능
// console.log(NaN, typeof(NaN));

// // number 타입으로 형변환
// let str1 = "123";
// let str2 = "abc";
// let num1 = Number(str1);
// let num2 = Number(str2)
// // console.log(str1, typeof star1, num21, typeof num1);
// console.log(str2, typeof(str2), num2, typeof(num2));

console.log("string 타입");
console.log("hello", typeof hello) ;
console.log('hello', typeof hello) ;
console.log(`hello`, typeof hello) ;

// let numstr = String(Infinity);

console.log(true, typeof true);
console.log(false, typeof(false));
console.log("",typeof "");
console.log(Boolean(""),typeof Boolean(""));
console.log(Boolean(" "),typeof Boolean(" "));
console.log(Boolean(" "),typeof Boolean(" "));

// falsy : 자바스크립트에서 논리적으로 거짓으로 평가되는 값
//      ex) false, 0, -0(음수 0), 0n(BigInt 형식의 0), ""(반문자열), null, undefined, NanN
// Truty : 자바스크립트에서 논리적으로 참으로 평가되는 값
//      ex) true, 1, -1, " ", ..

// trued 와 false 는 boolean타입의 명확한 값으로 참과 거짓을 나타낸대
// falsy와 Truthy : 특정 값들이 논리적 평가에서 어떻게 처리되는지를 설명하는 개념
// Falsy는 false처럼 동작하고 Truthy는 tru처럼 동작하는 값 들이다.

// Symbol
console.log(Symbol(), typeof(Symbol()));
console.log(Symbol("description"), typeof(Symbol("descrtion")));
// 심볼은 고유함을 보장하며 객체의 키로 심복을 사용할 수 있다.
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1, sym2);


// Object
// Object
// 객체 : 키-값 쌍의 집합
let person = {name : "이정훈", age : 20, isStudent : false};
console.log(person, typeof person);
console.log(person.name, person.age, typeof person.name);

//객체.key로 해당 value에 접근할 수 있다.

// array 배열
let arr = [1,2,3];
console.log(arr, typeof arr);

// function 함수
function printNum()
{
  console.log(1, typeof 1);
}

console.log(printNum, typeof printNum);

//  function이 발환되지만 특별한 객체로 취급된다.

// 줄바꿈을 할때 벡틱은 =

function truefalse(boolan)
{
  
}