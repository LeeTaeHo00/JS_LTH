// 7번 : fetch

fetch("https://jsonplaceholder.typicode.com/users") // 반환값 : Promise<Response> 객체
.then((response)=>{
  console.log(response.ok); // true http상태 코드가 200~299a, 아니면 false;
  console.log(`response : ${response.status}`);
  if(!response.ok){
    throw new Error(`response : ${response.status}`); // 강제 예외 발생
  }
  return response.json(); // 결과를 json으로  파싱해오는것
}).then((post)=>{
  if(!post){
    throw new Error(`결과 없음`);
  }
  return post.map((user)=>({
    id : user.id,
    name : user.name,
    email : user.email,
  }));
}).then(console.log)
.catch((error)=>{
  console.error("요청 실패 : ", error.message);
});

// 실행 흐름
// fetch()로 서버에 HTTP 요청 전송
// 첫번째 .then() 응답상태 확인 + JSON 파싱(response.json())
// 두번째 .then()에서 데이터 가공(map() 필요한 필드만 추출)
// 세번째 .then() 에서 최종 데이터 콘솔에 출력
// 에러 발생시 .catch에서 에러 메시지 출력

// .then().then().catch() => 체이닝 코드
// fetch - .then() 체이닝활용

// 정상 200
// 리다이렉션 응답 300
// 사용자 잘못 400
// 서버 문제 500

// Respose 객체 body 에 들어있는 값을 저장중