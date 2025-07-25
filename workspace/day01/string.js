// 9번 : 문자열 사용하기
// 문자열을 표현하는 방법 : "", '', ``

let subject = '자바스크립트';

const time = 5;

console.log(subject, typeof subject);
console.log(time, typeof time);

console.log(`나는 배운다 
  ${subject} 
  재미없다
  ${time} 일 동안`); // -> 문자열 -> 템플릿 백틱에서만 쓰임

