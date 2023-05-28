function levelOne() {
    const header1 = document.querySelector('h1');
    header1.innerText = 'Fixed?a';
    const paragraph = document.querySelector('p')
    paragraph.innerText = 'Paragraph'

    const all = document.querySelectorAll('p')

    for (let i=0;i<all.length;i++){
        const items = all[i]
        items.innerText = 'abc'
    }
} ; // levelOne()

function levelTwo() {
     const getID = document.getElementById('para')
     getID.innerText = 'abx'
} ; levelTwo()

let counts = 0
function countering()
{
    counts++
    const myCounter = document.getElementById('counting')
    myCounter.innerText = counts
}
function levelThree() {
    const myButton = document.getElementById('inc')
myButton.addEventListener('click', countering())
} ; levelThree()