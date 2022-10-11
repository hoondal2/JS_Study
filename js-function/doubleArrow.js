// 화살표 함수
// () => {} vs function() {}

const double = function (x) {
    return x * 2
}

console.log('double: ', double(7))


const doubleArrow = (x) => {
    return x * 2
}

// 바로 반환값이 나온다면 괄호와 return 생략가능
const doubleArrow2 = (x) =>  x * 2

// 매개 변수가 하나라면 소괄호도 생략 가능
const doubleArrow3 = x =>  x * 2

// 값을 바로 출력할 수 있다
const arrow = x => 123
const arrow2 = x => '123'
const arrow3 = x => true
const arrow4 = x => null

// 객체 데이터도 반환 가능 (소괄호 사용)
const arrow5 = x => ({name: 'Heropy'})



console.log('doubleArrow: ', doubleArrow(7))
console.log('doubleArrow2: ', doubleArrow2(7))
console.log('doubleArrow3: ', doubleArrow3(7))

console.log(arrow5(1)) // {name: 'Heropy'}
