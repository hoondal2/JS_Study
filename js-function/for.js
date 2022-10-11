// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

console.log(ulEl)

for(let i = 0; i < 10; i += 1){
    const li = document.createElement('li') // li 태그 생성
    li.textContent = `list-${i + 1}` // li 태그에 텍스트 삽입
    if((i + 1) % 2 === 0){ // 짝수일때
        li.addEventListener('click', function(){ // li 태그에 이벤트 추가
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li) // ul 태그의 자식태그로 추가 
}