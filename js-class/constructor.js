
// 멤버 -> 속성, 함수
// const heropy = {
//     firstName: 'Heropy', // 속성
//     lastName: 'Park', // 속성
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     } // 함수
// }
// console.log(heropy)

// const amy = {
//     firstName: 'Amy', 
//     lastName: 'Clarke', 
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     } 
// }
// console.log(amy.getFullName())

// const neo = {
//     firstName: 'Neo', 
//     lastName: 'Smith', 
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     } 
// }
// console.log(neo.getFullName())

/*
로직이 복잡해지고 규모가 커지게 되면 위와 같은 방식은
효율이 매우 떨어지게 된다. 
같은 로직을 가지고 있는 함수들이 계속해서 만들어지고 있기 때문이다. 
이것을 해결해 줄 수 있는 것이 자바스크립트의 클래스 개념이다
*/


function User(first, last) { 
    this.firstName = first
    this.lastName = last
}
user.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
} // 메모리에 딱 한번만 만들어진다. 

const heropy = new User('Heropy', 'Park') // 생성자 함수, 하나의 객체 데이터를 생성
const amy = new User('Amy', 'Clark')
const neo = new User('Neo', 'Smith')

console.log(heropy) // user라는 이름의 객체 데이터가 생성된다.
console.log(amy.getFullName())
console.log(neo.getFullName())


