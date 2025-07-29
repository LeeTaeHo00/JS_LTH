//1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
//학생정보 : 이름, 나이, 성적(1과목)
//1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기
//2) 객체에서 이름 키에 해당하는 값들만 출력하기
//3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용)

// 학생의 정보 객체

const student1Info = {
  name:"이태호",
  age:20,
  score:100
};

const student2Info = {
  name:"장성주",
  age:21,
  score:120,
};

const student3Info = {
  name:"이정훈",
  age:22,
  score:130,  
};

// 학생들의 정보를 저장하는 객체
const stList = [student1Info,student2Info,student3Info];

// 이름 성적 출력 + 속성 추가
for(let i = 0; i < stList.length; i++){
  console.log(`이름 : ${stList[i].name}, 성적 : ${stList[i].score}`);
  stList[i].grade = 2;
  console.log(`${stList[i].grade}학년`);
}




//2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
//1) 2배 증가시켜 새로운 배열로 출력하기
//2) 배열의 길이를 구하고 출력하기

//3) 배열에서 특정요소를 삭제하기(3) 메소드 사용
//4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기
const animals = ['dog', 'cat', 'rabbit'];


// 2배로 증가및 출력 + 배열의 길이 출력

console.log(animals.length);
let animalsMul = [];
for(let i = 0; i < animals.length; i++){
  animalsMul.push(animals[i]);
  animalsMul.push(animals[i]);
}

console.log(animalsMul);
console.log(animalsMul.length);

// 특정 요소 삭제
animalsMul.splice(3 ,1);
console.log(animalsMul);

// 캣 검색
console.log(animalsMul.indexOf('cat'));


//5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기
const colors = ['red', 'blue', 'green', 'yellow'];

colors.pop(); // 첫번째
colors.shift(); // 마지막

console.log(colors);

//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

let newArray = [];

data.forEach((element)=>{
  const newArrayValue = {
    value:element
  }

  newArray.push(newArrayValue);
});

//출력결과 : [{value: 10}, {value: 20}, {value: 30}]
console.log(newArray);


//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
const users = [
  {id : 1, name : "짱구", age : 5, subject : 'javascript'},
  {id : 2, name : "철수", age : 5, subject : 'javascript'},
  {id : 3, name : "맹구", age : 5, subject : 'javascript'}, 
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경

console.log(users);

for(let i = 0; i < users.length; i++){
  if(users[i].id === 2)
    {
      users[i].age = 6;
      users[i].subject = 'web표준';
    }
}

console.log(users);

//3) 배열의 요소를 모두 더하여 총합 출력하기
const numbers2 = [2, 5, 20, 10];

let sum = 0;

numbers2.forEach((element)=>{
  sum += element;
})

console.log(sum);
