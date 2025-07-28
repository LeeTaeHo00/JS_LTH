// 1번 : 일반 함수

// 매개변수 o 리턴값 o 함수 정의

function getAge(age, year){
  console.log(age, typeof age);
  console.log(year, typeof year);
  return age;
}

// 매개 변수O 리턴값 O 함수 호출

console.log(getAge(20,2025));
let age = getAge(20,2025);
console.log(age);

function getInfo(name, age, subject = "DB"){
  console.log(name);
  console.log(age);
  console.log(subject);
  return name + age;
}

let result1 = getInfo("짱구", 5);

let reulst2 = getInfo("철수", 5, '자바스크립트');

// 아이디 비밀번호 이름을 전달 받고 이름의 기본값을 사용자로 설정하기
// 함수명 : introduce 매개변수 O 리턴 x

function introduce(id, pw, name = "사용자"){
  console.log("[ID : " + id + "] [PW : " + pw + "] [이름 :  " + name + "]");
  console.log(`아이디 : ${id}, 비밀번호 : ${pw}, 이름 : ${name}`)
}

// introduce("abc" , 0123, `짱구`);
// 0123 으로 인수를 전달하면 8진수로 해석되어 계산된다.
// 1 x 8^2 + 2 x 8^1 + 3 x 8^0 = 83

// 가변 매개변수 : 함수 호출시 몇개의 값이 전달될지 모를 때 사용한다.
function printAdd(...numbers){
  console.log(numbers, typeof numbers);
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    if(!isNaN(Number(numbers[i]))){
      result += numbers[i];
    } else{
      console.log(`${numbers[i]}는 숫자가 아니라 제외함`)
    }
    // console.log(i, typeof i);
    // console.log(numbers[i], typeof numbers[i]);
  }

  console.log(result, typeof result);
}

printAdd(1,2,3,'a');

//1) 일반함수 참고
//매개변수 x 리턴값 x
function showHello(){
  console.log(`hello`);
}

showHello();

//매개변수 o 리턴값 x
function showGreet(greeting){
  console.log(`인사말 : ${greeting}`);
}

showGreet("안녕하세요");
showGreet("안녕히계세요");

//매개변수 x 리턴값 o
function multiply(){
  return 10 * 20;
}

console.log(multiply());
let result = multiply();
console.log(result);

//매개변수 o 리턴값 o
function multi(num1, num2){
  return num1 * num2;
}

console.log(multi(5, 2));
let result2 = multi(10, 5);
console.log(result2);
