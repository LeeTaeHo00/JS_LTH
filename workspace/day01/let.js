// 2 번 let키워드

let data1 = 'let변수';
console.log(data1, typeof data1, typeof(data1));
data = 'let 뱐수ㅡ 값 수정';
console.log(data1, typeof data1, typeof(data1));

console.log(number1, typeof number1);
let number1 = 10;

// 호이스팅은 자바스크립트에서 변수와 함수 선언을 코드의 최상단으로 끌어올리는 것을 의미하낟나.
// 코드를 실행하기 전에 변수, 함수 등의 선어니 메모리에 저장되기 때문에 가능하다.

// var로 선언된 변수는 선언과 동시에 undefined로 초기화 되고 이후에 실제 값(초기화값)으로 할당된다.
// 따라서 var로 선언된 변수는 선언전에도 접근이 가능하며 undefined ㄱ밧을 가진다.

// let 과 .coinst는 호이스팅이 되지만 초기화는 되자 않는다.
// 초기화 전에 접긓=ㄴ하려고 하면 참조에러가 발생한다.

// 그 이유는 let, const선언이 코드의 실행흐름에 도달했을 때 초기화 되기 때문이다


// let data1 = true;
console.log(data1);