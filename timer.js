// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// //========setTimeout=========
// setTimeout(function() {
//     console.log('Heropy!')
// }, 3000) // 3초후 실행

// setTimeout(() => {
//     console.log('Heropy!')
// }, 3000); // 3초후 실행

//========clearTimeout========

const timer = setInterval(() => {
    console.log('Heropy!')
}, 3000); //3초마다 실행

const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=>{
    clearInterval(timer) // h1태그를 클릭하면 timer함수가 더이상 실행되지 않는다
})
