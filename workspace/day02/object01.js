// 9 번 : 객체1

// 객체를 보통 const로 선언하며, 객체로 사용시 const라도 값 변경이 가능하다.
const user = {
  name : "김역성",
  address : "서울시 강남구",
  introduce : () => {
    console.log("안녕하세요");
  }
};

console.log(user, typeof user);
console.log(user.introduce);
user.introduce();
console.log(user['address']); // 규칙성을 찾는 접근
console.log(user.name); // 직접접근

// 실습
// 1. programming 객체 생성
// 프로퍼티 키는 pro1 ~ pro4 까지
// 프로퍼티 값은 java, dbms, html/css, javascript

const programming = {
  pro1 : "java",
  pro2 : "dbms",
  pro3 : "html/css",
  pro4 : "javascript"
};

// 2. 객체 출력 타입도 같이 출력

console.log(programming, typeof programming);

// 3. javascript 만 출력하기  방법2가지로 각각 출력 타입까지

console.log(programming.pro1, typeof programming.pro1);
console.log(programming['pro4'], typeof programming['pro4']);

// 4. pro1의 값을 자바로 변경
// 객체명.객체프로퍼티키 = 변경할 값
programming.pro1 = "자바";

// 5. pro5 객체 추가
// 프로퍼티 값은 git
programming.pro5 = "git";

//6. 객체의 전체 값 하나 씩 출력
for(let i in programming){
  console.log(programming[i]);
}

// console.log(programming);
// console.log(programming.pro1, typeof programming.pro1);
// console.log(programming.pro2, typeof programming.pro2);
// console.log(programming.pro3, typeof programming.pro3);
// console.log(programming.pro4, typeof programming.pro4);
// console.log(programming.pro5, typeof programming.pro5);


// for...in
// 객체의 키(프로퍼티 이름)을 순환한다
// 일반 객체나 배열에서 모두 사용가능하다

// for...of
// 이터러블(iterable) 객체에서만 사용가능 => 배열, 문자열, Map, Set등....
// 순환시 객체의 값을 반환한다.
// 일반 객체는 이터러블 객체가 아니므로 사용 불가하다.
// [Symbol,iterator] 메소드를 가진 객체를 이터러블 객체라고 한다

// 일반 객체를 for...of로 순화하려면 배열로 변환하면 된다.

for(let key of Object.keys(programming)){
  console.log(key);
}

for(let value of Object.values(programming)){
  console.log(value);
}

for(let [key, value] of Object.entries(programming)){
  console.log(`${key}의 값 : ${value}`);
}

// 객체에 [Symbol.iterator]를 직접 추가
const program = {
  lang1 : "javascript",
  lang2 : 'html',
  lang3 : 'css',
  [Symbol.iterator] : function * (){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  },
};

for(let value of program){
  console.log(value);
}