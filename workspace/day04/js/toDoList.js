const addTaskButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener('click', function(){
  const taskStr = prompt("할 일을 적어주세요", " ");
  const newTask = document.createElement('li');

  if(taskStr == null) return;
  
  // 자식 요소 설정
  const textDiv = document.createElement('div');
  const taskText = document.createTextNode(taskStr);
  textDiv.appendChild(taskText);

  const taskDeleteButton = document.createElement('input');
  const taskCheckboxButton = document.createElement('input');
  newTask.setAttribute('id', "task");

  taskCheckboxButton.setAttribute('type',"checkbox");

  taskDeleteButton.setAttribute('type',"button");
  taskDeleteButton.setAttribute('value', "삭제");

  taskDeleteButton.addEventListener('click', function(){
    let checkTrue = confirm("진짜 삭제 할겨?");
    if(checkTrue){
      newTask.remove();
    }
  });

  taskCheckboxButton.addEventListener('click', function(){
    if(taskCheckboxButton.checked){
      newTask.style.backgroundColor = 'chartreuse';
    } else{
      newTask.style.backgroundColor = 'white';
    }
  });

  textDiv.style.flex = "1";
  textDiv.padding = "auto 5px";

  newTask.style.padding = "10px";
  newTask.style.margin = "auto 10px";
  newTask.style.display = "flex";
  newTask.style.flexWrap = 'wrap';
  // newTask.style.justifyContent = "space-between";
  

  // 자식요소 추가
  newTask.appendChild(taskCheckboxButton);
  newTask.appendChild(textDiv);
  newTask.appendChild(taskDeleteButton);

  taskList.appendChild(newTask);
});