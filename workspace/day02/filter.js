// 14q번 : filter()
// const 새로=운 배열명 = 배열명,  filter(callback(eleement[,idnex[,]][,,this]))

const number = [1,2,3,4,5,6,7,8,9,10];
const even = number.filter(function (element){return element % 2 === 0;});

console.log(even);

const evenIdx = number.filter(function(element,index){
  return index % 2 === 0;
});

console.log(evenIdx);

// 배열의 짝수 요소를 두배로 만든 새로운 배열생성
const evenARr = number.filter(function (element){return element % 2 === 0;}).map(function(eletment){return eletment * 2});
console.log(evenARr);

const evenArr2 = number.filter((element)=>{element % 2 === 0;}).map((element) => {element * 2;});
console.log(evenArr2);