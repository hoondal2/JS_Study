// // 산술 연산자 (arithmetic operator)
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)  // 2 (나머지 반환)



// // 할당 연산자 (assignment operator)
// const a = 2 // const는 재할당 불가능
// let b = 2 // let은 재할당 가능

// // b = b + 1
// // 아래와 같이 사용할 수 있다
// b += 1

// console.log(b) // 3



// // 비교 연산자 (comparison operator)

// const c = 1
// const d = 1

// console.log(c === d) // true

// function isEqual(x, y){
//     return x === y
// }

// console.log(isEqual(1, 1)) // true
// console.log(isEqual(2, '2')) // false -> 타입 불일치
// console.log(c !== d) // false -> 같음
// console.log(c < d) // false -> 같음
// console.log(a > c) // true
// console.log( c <= d) // true



// // 논리 연산자 (logical operator)

// const e = 1 === 123
// const f = 'AB' === 'ABC'
// const g = false

// console.log(e) // false
// console.log(f) // false
// console.log(g) // false

// console.log('&&: ', e && f && g) // 하나라도 false면 false
// console.log('||: ', e || f || g) // 하나라도 true면 true
// console.log('!: ', !e) // 부정 연산자, 반대가 나옴




// 삼항 연산자 (ternary operator)

const a = 1 < 2 // true
if(a){
    console.log('참')
}else{
    console.log('거짓')
}

// 위와 같은 의미
// 물음표 앞의 값이 true이면 앞부분, false면 뒷부분 실행
console.log(a ? '참' : '거짓')