// 6번 : async / awit

// async 함수는 내부에서 return한 값을 자동으로 promise.resolve(value)로 변환함
async function getName(){
  return "장구"; // 자동으로 Promise로 감싸짐
}

async function printName(){
  const name = await getName(); // awit getName()은 getName() 함수의 Promise가 이행(resolve)될 때까지 기다린다.
  console.log(name);
}

printName();