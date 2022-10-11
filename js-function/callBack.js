// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout() {
    setTimeout(() => {
        console.log('Heropy')
    }, 3000)
}

timeout();
console.log('Done!') // timeout()보다 먼저 실행된다


// timeout()뒤에 실행되도록 보장해주려면 어떻게 해야 할까?
// callback 개념 사용, 실행위치 보장
function timeout2(cb) {
    setTimeout(() => {
        console.log('Heropy');
        cb() 
    }, 3000)
}

timeout2(()=> {
    console.log('Done!')
})
