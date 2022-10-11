// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

// const heropy = {
//     name: 'Heropy',
//     normal: function () 
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name) // 함수 블럭 범위 내에 this가 정의되어 있지 않다
//     }
// }

// heropy.normal() // Heropy
// heropy.arrow() // undifined

// const amy = {
//     name: 'Amy',
//     normal: heropy.normal, // this = Amy
//     arrow: heropy.arrow
// }

// amy.normal() // Amy
// amy.arrow() // undifined

//========================================

// function User(name) {
//     this.name = name
// }

// User.prototype.normal = function () {
//     console.log(this.name)
// }

// User.prototype.arrow = () => {
//     console.log(this.name) // 블럭 범위 내에 this가 정의되어 있지 않다
// }

// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow()


//========================================

const timer = {
    name: 'Heropy!!',
    timeout: function () {
        setTimeout(function () {
            console.log(this.name) // 여기서 this는 setTimeout의 로직 범위내에서 정의되어야 함
        }, 2000)
    }
}

timer.timeout() // undifined


const timer2 = {
    name: 'Heropy!!',
    timeout: function () {
        setTimeout(() => {
            console.log(this.name) // 여기서 this는 함수 범위, 즉 
        }, 2000)
    }
}

timer2.timeout() // Heropy!!
