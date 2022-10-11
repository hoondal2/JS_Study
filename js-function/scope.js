// 변수 유효범위 (Variable Scope)
// var, let, const
// let 과 const는 블록레벨의 유효범위를 갖는다
// 블록레벨이란? 중괄호 내부
// var는 함수범위의 유효범위를 갖는다

function scope() {
    // console.log(a) -> reference 에러 발생

    if(true) {
        const a = 123 // let 과 const는 사용되는 블럭 내부가 유효범위가 된다
        console.log(a)
    }
    // console.log(a) -> reference 에러 발생
}
scope()

function scopeForVar() {
    console.log(a) // undifined, var의 값이 지정되기 전이기 때문
    if(true) {
        var a = 123 
    }
    console.log(a) // 123, 함수범위의 유효범위를 갖는다. 때문에 메모리를 많이 차지하고 개발시 혼란을 주기때문에 사용이 권장되지 않는다
}
scopeForVar()