// 11번 : 배열1

// 1. 배열 생성
// 1) 배열 리터럴 대괄호 사용한 배열 생섣
let arr1 = [];
console.log(arr1, typeof arr1);

arr1[0] = 10;
arr1[1] = '가나디';
arr1[2] = true;
console.log(arr1, typeof arr1); // [10, '가나다', true] object

let arr2 = [10, 0.5, '안녕'];
console.log(arr2, typeof arr2);
console.log(`arr2 배열의 길이 : ${arr2.length}`); // arr2 배열의 길이 : 3

// 배열 크기 지정한 배열 생성(콤마 개수만큼 배열 생성)
let arr3 = [,,,,];
console.log(arr3,typeof arr3);
console.log(arr3.length);


// 2) Array() 생성자 함수로 배열 생성
let arr4 = new Array();
console.log(arr4, arr4.length, typeof arr4);
arr4[0] = '사과';
arr4[1] = '체리';
arr4[2] = '복숭아';
console.log(arr4, arr4.length, typeof arr4);

// Array() 생성자 함수로 초기값 할당
let arr5 = new Array('0번째 인덱스', 1, true);
console.log(arr5);

// 생성자 함수로 칸수 지정
let arr6 = new Array(10);
console.log(arr6);

let arr7 = ['a', 'b', 'c', 'd'];

// 배열 순회시 사요할 수 있는 반복ㅁ눈

for(let i in arr7){
  console.log(i);
}

for(let i of arr7){
  console.log(i);
}