// 형 변환 (Type conversion)

const a = 1
const b = '1'

console.log(a == b) // true, 동등 연산자 -> 형변환이 일어남, 의도치 않은 결과가 나올 수 있기 때문에 권장하지 않음


// Truthy(참 같은 값), 대부분의 값이 true
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undifined, 0, -0, NaN(Not A Number)

if(undifined){
    console.log(123) // 출력 안됨
}


/* NaN ?
    1 + undifined
    -> 숫자데이터에 산술 연산자를 이용해 연산을 했을때, 숫자가 아닌 값과 연산했다고 판단하면 NaN
*/