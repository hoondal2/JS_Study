// 함수 복습
// function sum(x, y) {
//     return x + y
// }

// const a = sum(1, 3)
// const b = sum(4, 12)

// console.log(a)
// console.log(b)
// console.log(a+b)

// if문 응용
// function sum(x, y){
//     if(x < 2) {
//         return
//     }
//     return x + y
// }

// console.log(sum(1, 3)) // undifined
// console.log(sum(7, 3)) // 10

// 배열 사용
function sum(){
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(sum(7, 3)) // 10, 배열 형태로 반환 (0: 7 / 1: 3)