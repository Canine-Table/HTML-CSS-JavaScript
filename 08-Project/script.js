const increaseButton = document.getElementById('increase')
const decreaseButton = document.getElementById('decrease')
const deleteButton = document.getElementById('delete')
const clearButton = document.getElementById('clear')
const counterDisplay = document.getElementById('counter')
const unorderedElement = document.getElementById('unorderedList')
let number = 0

function increaseCounter() {
    number++
    counterDisplay.innerText = number
    if (number > 0) {
            const newElement = document.createElement('li')
            newElement.setAttribute('data-counter',number)
            const bTag = document.createElement('b')
            const iTag = document.createElement('i')

            const prefixText = document.createTextNode('Number: ')
            const sufixText = document.createTextNode(number)

            iTag.appendChild(sufixText)
            bTag.appendChild(prefixText)
            newElement.appendChild(bTag)
            newElement.appendChild(iTag)
            const counting = parseInt(newElement.getAttribute('data-counter'),10)
            if (counting % 2 == 1) {
                    console.log("positive odd: "+counting)
                    newElement.setAttribute('class', 'red')
                    newElement.style.border = '2px solid orange'
                }   
            else {
                    console.log("positive even: "+counting)
                    newElement.setAttribute('class', 'orange')
                    newElement.style.border = '2px solid red'

                }            
            unorderedElement.appendChild(newElement)
            newElement.setAttribute('data-counter',number)
        }
    else
        {
            const newElement = unorderedElement.querySelector('[data-counter="'+number+'"]')
            newElement.setAttribute('data-counter',number)
            const counting = parseInt(newElement.getAttribute('data-counter'),10)
            newElement.remove()
            if (counting % 2 == 1) {
                    console.log("positive even: "+counting)
                }   
            else {
                    console.log("positive odd: "+counting)
                }
        }
}


function deleteCounter() {

}

function decreaseCounter() {
    number--
    counterDisplay.innerText = number
    if (number < 0) {
            const newElement = document.createElement('li')
            newElement.innerHTML = "<b>Number: </b><i>"+number+"</i>"
            const absolute = Math.abs(number)
            if ( absolute % 2 == 0) {
                    console.log("negative odd: "+absolute)
                    newElement.setAttribute('class', 'green')
                    newElement.style.border = '2px solid blue'
                }   
            else {
                    console.log("negative even: "+absolute)
                    newElement.setAttribute('class', 'blue')
                    newElement.style.border = '2px solid green'
                }            
            unorderedElement.appendChild(newElement)
            newElement.setAttribute('data-counter',number)
        }
    else
        {
            const newElement = unorderedElement.querySelector('[data-counter="'+number+'"]')
            newElement.setAttribute('data-counter',number)
            const counting = parseInt(newElement.getAttribute('data-counter'),10)
            newElement.remove()
            if (counting % 2 == 1) {
                    console.log("negative odd: "+counting)
                }   
            else {
                    console.log("negative even: "+counting)
                }
        }
}
let plus = []
let minus = []
function clearCounter() {
plus.push('2')
minus.push('-2')
total = [...plus, ...minus] // destructured array part of es6 
console.log(total)

const destroyOne = {
    name1: 'one',
    age1: 22
}
const destroyTwo = {
    name2: 'two',
    age2: 2390
}
const Ac = 'keep'
const destroyThree = {
    name3: 'THREE',
    age3: 239,
    Ac,
    age1: 3,
 
}

const output123 = {
    ...destroyOne,
    ...destroyTwo,
    ...destroyThree
}
console.log(output123)
}

const functionES6 = (arg1,arg2) => {
    // These functions are not hoisted!!!
    const returnFunctionES6 = () => arg1 ** arg2
    return returnFunctionES6()
} ; //console.log(functionES6(22,2))

let arrayMap = () => {
    let filtering = []
    const arr = [1,2,3,4,5,6,7,8,9,0]
    const newArrayMap = arr.map( element => {
        filtering.push(element)
        return filtering.filter(element => element % 2 == 0)
    })
    const filterArray = filtering.filter(element => element % 2 == 0)

    console.log(arr, newArrayMap,filterArray)
} ; //arrayMap()


increaseButton.addEventListener('click', increaseCounter)
decreaseButton.addEventListener('click', decreaseCounter)
deleteButton.addEventListener('click', deleteCounter)
clearButton.addEventListener('click', clearCounter)

let myLovelyArray = () => {
    person1 = {
        name: 'Andy',
        age: 21
    }
    person2 = {
        name: 'Alice',
        age: 84
    }
    person3 = {
        name: 'Bill',
        age: 33
    }
    person4 = {
        name: 'Paul',
        age: 64
    }
    person5 = {
        name: 'John',
        age: 17
    }
    person6 = {
        name: 'Julia',
        age: 20
    }

    let people = [person1,person2,person3,person4,person5,person6]
    console.log(people)

    const filtering = people.filter(element => element.age > 21)
    console.log(filtering)

    const mapAge = filtering.map(element => element.age ** 2)
    console.log(mapAge)

    const finding = people.find(element => element.name === 'John')
    console.log(finding)

    people.forEach(element => {
        console.log(element.name)
    })

} ; //myLovelyArray()


const mutliLineString = `
Hello
    World
        This
            is
                a
                    Multi
                        Line
                            String
`
//console.log(mutliLineString)

const jsonPromiseAPI = () => {
    const promise =  fetch('data.json')
    promise.then(data => {
        console.log(data)
    })
    promise.then(response => {
        const promise2 = response.json()
        promise2.then(data => {
            console.log(data)
        })
    })
} ; jsonPromiseAPI()