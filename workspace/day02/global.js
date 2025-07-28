globalThis.num;


console.log(globalThis.num);
let num1 = 10;
let num2 = 20;

console.log(num1, num2);

function changeNumber(num1, num2){
  globalThis.num = num1;
  console.log(globalThis.num);

  num1 = num2;
  num2 = globalThis.num;
  console.log(num1, num2);
}

changeNumber(num1, num2);
console.log(globalThis.num);

// glotbalThis 객체르 ㄹ사용하여 전역변수를 설정하고 함수 내부에서 변수 값을 변경
// globalThis는 자바스크립트 환경에 따라 전역 객체에 접근하는 방법이 달라 코드의 이식성이 떨어지는 것을 극복하기 위해ㅔ
// 도입된 표준화된 방법(ES11에서 도입된 표준 객체)

// globalThis를 이용한 전역 문자열
globalThis.str = "Hellow";
console.log(globalThis.str);

function data(){
  globalThis.str = "값 변경";
  let number = "숫자"; // 블록스코프 변수\
}

console.log(globalThis.str); // 값 변경ㅇ 출력 => 전역 객체에 변수르 ㄹ설정할 수 있고 함수 밖에서도 접근가능
console.log(globalThis.number); // undefined 블록스코프 변수이므로 globalThis.number로 설저안됨