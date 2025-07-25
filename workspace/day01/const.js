// 2번 : const 상수(var.js, let.js랑 결과말림)

// console.log(data); 호이스팅은 되지만 초기화전에는 접근 불가능 referenceError
// 선언 자체는 위로 끌어올려지지만 초기화 전에는 접근하면 안됨 (TDZ Temporal Dead Zone)
const datal = 10;
console.log(datal, typeof data1);

data1 = 20; // data1은 상수라 값변경이 불가능
console.log(data1, typeof data1)