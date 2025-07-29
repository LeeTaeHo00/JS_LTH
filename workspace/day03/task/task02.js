
//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것
const myName = "이태호";
const age = 27;


//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력
console.log(`${myName}님은 나이가${age}로 ${age >= 19 ? "입장 가능" : "입장 불가능"} 입니다.`);
console.log(`${myName}님은 나이가${age}로 ${age >= 19 ? "당첨" : "다음 기회에"} 입니다.`);

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const stuName = "이태호";
const score = 75;

function checkScore(name, score){
  console.log(`${stuName}의 성적은 ${score}로 ${score == 100 ? "장학생" : "일반학생"} 입니다.`);
  console.log(`${stuName}의 성적은 ${score}로 ${score >= 60 ? "합격" : "불합격"} 입니다.`);
}

checkScore(stuName, score);


//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

const studName2 = "장성주";
const score2 = 80;

function checkGrade(studName2, score){
  let  scoreString = "F";
  if(score >= 90){
    scoreString = "A";
  } else if(score >= 80) {
    scoreString = "B";
  } else if(score >= 70){
    scoreString = "C"
  }

  console.log(`${studName2}의 학점은 ${scoreString} 입니다.`);
}

checkGrade(studName2, score2);


//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력

let nums = [];
for(let i = 1; i <= 100; i++){
  nums.push(i);
}

let sum = 0;
nums.forEach((element)=>{
  if(element % 3 == 0)
  {
    sum += element;
  }
});

console.log(sum);