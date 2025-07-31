// 8번 : : fetch - async/awit 활용

async function fetchUsers(){
  try{
    const respose = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(respose.status);
    console.log(respose.ok);

    if(!respose.ok){
      throw new Error(`응답없음`);
    }
    const users = await respose.json();
    if(!users){
      throw new Error(`결과없음`);
    }

    const result  = users.map((user)=>({
      id:user.id,
      name:user.name,
      email:user.email
    }));

    console.log(result);
  } catch(error){
    console.log(`요청실패 : `, error.message);
  }
}

fetchUsers();