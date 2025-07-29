// 전체동의

NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;

const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");

console.log(all);
console.log(terms);

// 전체동의 체크박스를 클릭할 때마다 실행되는 이벤트리스터
all.addEventListener('click', ()=>{
  terms.forEach((term)=>{
    console.log(term);
    term.checked = all.checked;
  })
});

// 약관 동의 체크박스를 클릭할때 마다 실행되는 이벤트 리스너

terms.forEach((term)=>{
  term.addEventListener('click', ()=>{
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 3;
  });
});