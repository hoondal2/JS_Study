// import getType from './getType'

// console.log(typeof 'hello world!')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))




import random from './getRandom'

// 조건문 (If statement)

const a = random()

// if(a === 0) {
//     console.log('a is 0')
// } else if (a === 2) {
//     console.log('a is 2')
// } else {
//     console.log('rest...')
// }


// 조건문 (Switch statement)
switch(a) {
    case 0:
        console.log('a is 0')
        break
    case 2:
        console.log('a is 2')
        break
    case 4:
        console.log('a is 4')
        break
    default :
       console.log('rest...')
}