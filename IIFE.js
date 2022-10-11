// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression
// 함수를 만들자마자 실행해서 바로 동작하도록 함

const a = 7
function double() {
    console.log(a * 2)
}
double();

// 1. 아래와 같은 익명함수는 바로 실행할 수 없다.
// function() {
//     console.log(a * 2)
// }


// 2. 소괄호를 이용해 즉시 실행할 수 있는 함수를 만들 수 있다
// 스크립트 내에서 즉시실행함수는 따로 구분할 수 없기 때문에, 에러방지를 위해 항상 세미콜론으로 구분시켜준다
(function() {
    console.log(a * 2)
})();

(function() {
    console.log(a * 2)
}()); // 소괄호를 내부에 적어도 가능, 더 권장됨