// 7번 연산자
// 1) 관계 연산자

let data1 = "1";
let data2 = 1;

console.log(data1, typeof data1, data2, typeof data2);

console.log(data1 == data2);
console.log(data1 === data2);

// false로 취급되는 값 falsy
console.log(Boolean(""),Boolean(''),Boolean(``), Boolean(0.0) , Boolean(-0),typeof Boolean(-0), Boolean(null), Boolean(undefined));

let data;
console.log(data, typeof data);

if(data)
  {
    console.log("true");
  }

  else
  {
    console.log("false");
  }