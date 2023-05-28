#!/usr/bin/node
function levelOne() {
let letVar = 4; /* Integer Value */
const constVar = 3; /* Const is == to final */
let stringVar = "Hello World" /* String Variable */
const boolVar = true /* Boolean Variable */
let arrayVar = [22, true, 3.14, 239212, stringVar, "a String"] /* an Array*/
const constBigInteger = 1234567890987654321234567890987654321n /*n at the end == big int*/
let letUndefined; /* Undefined */
const constUndefine = undefined; /* Undefined */
let letNull = null;
const typeInteger = (typeof letVar);
let typeBool = (typeof boolVar);
const typeBigInteger = (typeof constBigInteger);
let typeUndefined = (typeof letUndefined)
const typeNull = (typeof letNull);
let typeSting = (typeof stringVar);

console.log(boolVar,constBigInteger,constVar,letVar,stringVar,arrayVar);
console.log(arrayVar,arrayVar[1],arrayVar[2],arrayVar[0]);
console.log(typeInteger,typeBigInteger,typeUndefined,typeNull,typeSting);
console.log(constUndefine,letUndefined,letNull);
console.log(letVar++,letVar++,letVar--,letVar*=letVar,letVar+=3)
} ; //levelOne()

function levelTwo(value1,value2) {
    let arg1 = value1
    let arg2 = value2
    console.log(arg1+arg2);
} ; // levelTwo(2,3)

function levelThree(output) {
    const input = output*output
    return input
}
function returnThree() {
    console.log(levelThree(134))
    console.log(levelThree())
} ; //returnThree()

function levelFour(Integer) {
    if (Integer = 5)
        {
            return 5
        }
    else if (Integer < 5)
        {
            return "less"
        }
    else 
        {
            return "more"
        }
} ; //console.log(levelFour(1))

let myArrayFive = []
function levelFive(param1,param2) {
    myArrayFive.push(param1)
    myArrayFive.unshift(param2)
    console.log("Index: "+myArrayFive.length)
    myArrayFive.pop()
    console.log(myArrayFive)
}
function outputFive() {
levelFive("bob","frank")
levelFive("john","june")
levelFive("jake","jude")
levelFive("nick","bill")
} ; //outputFive()

function levelSix() {
    let j = []
    for (i=1;i<10;i++) {
        if ( i % 2  == 0 ){
            continue
        }
        j.push(i)
        j.unshift(i)
    }
    return j
} ; //console.log(levelSix()) 

function levelSeven() {
    hashMap = {
        One:    1,
        Two:    2,
        Three:  3,
        Four:   4,
        Five:   5,
        Six: {
            Six: 6,
            Seven: {
                Seven: 7,
                Eight: 8,
                Nine:   9,
                Zero:   0
            }
        }
    }
    console.log(hashMap['Two'])
    console.log(hashMap.Six.Seven['Seven'])
    console.log(hashMap.Six.Seven['Eight'])
    console.log(hashMap.Six.Seven['Nine'])
    console.log(hashMap.Six.Seven['Zero'])

} ; //levelSeven()

const myProfile = {
    name: 'John',
    age:  '93'
}
const mySecondProfile = {
    name: 'Jane',
    age:  '302'
}
function mutedEight(obj) {
    console.log(obj.age)
} //mutedEight(myProfile)

let num = 1
function primitiveMutateNine(primitive) {
    primitive++
    console.log(primitive)
} ; //primitiveMutateNine(num) ; console.log(num)

const shadow = 10
function showdowTen() {
    const shadow = 100
    console.log(shadow)
} ; //showdowTen() ; console.log(shadow)
//console.log(document)

const paragraph = document.querySelectorAll('p')
//console.log(paragraph)
paragraph.innerText = 'Hello Javascript'