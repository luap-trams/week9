// const person1 = {
//     firstName: 'francis',
//     surname: 'kolawola',
//     age: 55,
//     town: 'lagos',
//     profession: 'teacher',
//     likes: ['basketball','football', 'tennis', 'gymnastic']
// }
// console.log(person1)

// console.log(person1.age)

// delete person1.town

// person1.isMale = true
// delete person1.likes[2]

// person1.likes[2] = 'tennis'

// person1.likes.splice(2,1)

// person1.speech = function(){
//     return `I am ${this.firstName } ${this.surname} I am ${this.age} years old. I love ${person1.likes[Math.floor(Math.random()*person1.likes.length)]}.`


// }
// console.log(person1.speech())

function Person(name,age,town){
    this.name = name
    this.age = age
    this.town = town
    this.pitch = function(){
        return `Hi I am ${this.name} from ${this.town}`
    }
}

const person2 = new Person('jude',31,'benin')
const person3 = new Person('sayrah',31,'sokoto')
const person4 = new Person('yomi',31,'rivers')

console.log(person2.pitch(),'\n', person3.pitch(),'\n',person4.pitch())


