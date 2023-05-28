#!/usr/bin/node

document.getElementById('alertButton').onclick = () => {
    window.alert('Hello World');
    console.log('Hello World');
} // Alert Button

document.getElementById('usernameButton').onclick = () => {
    let username = window.prompt('what is your name?');
    window.alert("Hello "+username+". Welcome to JavaScript!");
    console.log(username);
} // Username Button

document.getElementById('promptButton').onclick = () => {
    const inputValue = document.getElementById('promptInput').value;
    console.log(inputValue);
    window.alert('Hello: '+inputValue);
} // Submit Button

document.getElementById('mathButton').onclick = () => {
    let w = Number('string');
    let x = '3.14';
    let y = 'string';
    let z = Boolean('0');
    let a = 3.14159;
    let b = Math.floor(Math.random() * 100) + 1;

    console.log(x+" = "+typeof Number(x));
    console.log(z+" = "+typeof z);
    console.log(y+" = "+typeof String(y));
    console.log(w+" = "+typeof Number(w));
    console.log(a+' rounded equals '+Math.round(a))
    console.log('Your random number '+b+' cubed is equal to '+Math.pow(b, 3));
    console.log("Max value: "+Math.max(3,4394,43,94,432,923,912,1,321,43,121)+" and min value: "+Math.min(3,4394,43,94,432,923,912,1,321,43,121));
} //Math Button

document.getElementById('piButton').onclick = () => {
    const PI = 3.14159;
    let radius;
    let circumference;
    radius = window.prompt('Enter the radius of your circle:');
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log('The circumference of your circle is: '+circumference);
    window.alert('circumference = '+circumference);
} // PI Button


document.getElementById('rollButton').onclick = () => {
    let x = Math.floor(Math.random()*100)+1;
    let y = Math.floor(Math.random()*100)+1;
    let z = Math.floor(Math.random()*100)+1;
    const output = 'the 3 randomly generated numbers are '+x+' , '+y+' , '+z;
    console.log(output);
    window.alert(output);
} // Roll Button

document.getElementById('stringButton').onclick = () => {

    let string = ' This a String ';
    let repeat = " Repeat! ";
    console.log("the fourth character is:"+string.charAt(3));
    console.log("the first character 't' is found at index number: "+string.indexOf('t'));
    console.log("the last character 't' is found at index number: "+string.lastIndexOf('t'));
    console.log("lowercase: "+string.toLowerCase());
    console.log("UPPERCASE: "+string.toUpperCase());
    console.log("Trim: "+string.trim());
    console.log("Replace This with That: "+string.replace('This','That'));
    console.log(repeat.repeat(14));
    console.log("Sliced: "+string.slice(0,8));
    console.log("Sliced: "+string.slice(8));
    console.log(string.toLowerCase().trim().repeat(4).slice(4));
} // String Button

document.getElementById('checkboxSubmitButton').onclick = () => {
    let messagePromptChecked = 'You Have Checked off Checkbox ';
    let messagePromptUnchecked = 'You Have left Checkmark ';
    if (document.getElementById('checkBoxOne').checked){
            console.log(messagePromptChecked+'One');
            window.alert(messagePromptChecked+'One');
        }
    else {
            console.log(messagePromptUnchecked+'One'+' blank');
            window.alert(messagePromptUnchecked+'One'+' blank');
        }
    if (document.getElementById('checkBoxTwo').checked){
            console.log(messagePromptChecked+'Two');
            window.alert(messagePromptChecked+'Two');
        }
    else {
            console.log(messagePromptUnchecked+'Two'+' blank');
            window.alert(messagePromptUnchecked+'Two'+' blank');
        }
    if (document.getElementById('checkBoxThree').checked){
            console.log(messagePromptChecked+'Three');
            window.alert(messagePromptChecked+'Three');
        }
    else {
            console.log(messagePromptUnchecked+'Three'+' blank')
            window.alert(messagePromptUnchecked+'Three'+' blank');
        }
    if (document.getElementById('checkBoxFour').checked){
            console.log(messagePromptChecked+'Four');
            window.alert(messagePromptChecked+'Four');
        }
    else {
            console.log(messagePromptUnchecked+'Four'+' blank')
            window.alert(messagePromptUnchecked+'Four'+' blank');
        }
    if (document.getElementById('checkBoxFive').checked){
            console.log(messagePromptChecked+'Five');
            window.alert(messagePromptChecked+'Five');
        }
    else {
            console.log(messagePromptUnchecked+'Five'+' blank')
            window.alert(messagePromptUnchecked+'Five'+' blank');
        }
    if (document.getElementById('checkBoxSix').checked){
            console.log(messagePromptChecked+'Six');
            window.alert(messagePromptChecked+'Six');
        }
    else {
            console.log(messagePromptUnchecked+'Six'+' blank');
            window.alert(messagePromptUnchecked+'Six'+' blank');
        }

    if (document.getElementById('checkBoxSeven').checked){
            console.log(messagePromptChecked+'Seven');
            window.alert(messagePromptChecked+'Seven');
        }
    else {
            console.log(messagePromptUnchecked+'Seven'+' blank');
            window.alert(messagePromptUnchecked+'Seven'+' blank');
        }
} // CheckBox Button

document.getElementById('radioSubmitButton').onclick = () => {
    const message = 'You Chose ';
    if(document.getElementById('radioButtonOne').checked) {
            console.log(message+'One');
            window.alert(message+'One');
        }
    else if (document.getElementById('radioButtonTwo').checked) {
            console.log(message+'Two');
            window.alert(message+'Two');
        }
    else if (document.getElementById('radioButtonThree').checked) {
           console.log(message+'Three');
           window.alert(message+'Three');
        }
    else if (document.getElementById('radioButtonFour').checked) {
            console.log(message+'Four');
            window.alert(message+'Four');
         }
    else if (document.getElementById('radioButtonFive').checked) {
            console.log(message+'Five');
            window.alert(message+'Five');
         }
    else if (document.getElementById('radioButtonSix').checked) {
            console.log(message+'Six');
            window.alert(message+'Six');
         }
    else if (document.getElementById('radioButtonSeven').checked) {
            console.log(message+'Seven');
            window.alert(message+'Seven');
         }         
    else if (document.getElementById('radioButtonEight').checked) {
            console.log(message+'Eight');
            window.alert(message+'Eight');
        }
    else {
        console.log('please choose');
        windows.alert('please choose');
    }
} // Radio Button

document.getElementById('switchButton').onclick = () => {
    switch(String(Math.floor(Math.random()*5))){
            case '1': 
                console.log('you got the number 1');
                break;
            case '2':
                console.log('you got the number 2');
                break;
            case '3':
                console.log('you got the number 3');
                break;
            case '4':
                console.log('you got the number 4');
                break;
            default:
                console.log('you got the number 5');
                break;
        }
} // Switch Button

function switchTabs(evt, tabName) {
    var i, tabContents, tabButtons;
    tabContents = document.getElementsByClassName("tabContents");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
      }
    tabButtons = document.getElementsByClassName("tabButtons");
    for (i = 0; i < tabButtons.length; i++) {
            tabButtons[i].className = tabButtons[i].className.replace(" active", "");
        }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
} ; document.getElementById('promptTabButton').click(); // Bottom Tab Creation

function switchLeftTabs(evt, leftTabName) {
    var i, leftTabContents, leftTabButtons;
    leftTabContents = document.getElementsByClassName("innerDivs leftTabContents");
    for (i = 0; i < leftTabContents.length; i++) {
        leftTabContents[i].style.display = "none";
      }
    leftTabButtons = document.getElementsByClassName("leftTabButtons");
    for (i = 0; i < leftTabButtons.length; i++) {
        leftTabButtons[i].className = leftTabButtons[i].className.replace(" active", "");
    }
    document.getElementById(leftTabName).style.display = "flex";
    evt.currentTarget.className += " active";
} ; document.getElementById('anonymousButton').click(); // Left Tab Creation

document.getElementById('tenuriOperator').onclick = () => {
    let randomNumber = Math.floor(Math.random()*2)
    return randomNumber === 1 ? console.log(true) : console.log(false)
} // Tenuri Operator Button

document.getElementById('localeString').onclick = () => {
    const num = 3239403.232239
    const chart = `
        English:    ${num.toLocaleString('en-US')}
        Hindi:      ${num.toLocaleString('hi-IN')}
        German:     ${num.toLocaleString('de-DE')}
        USD:        ${num.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}
        Rupee:      ${num.toLocaleString('hi-IN',{style: 'currency', currency: 'INR'})}
        Euro:       ${num.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'})}
        Percent:    ${num.toLocaleString(undefined,{style: 'percent'})}
        Mile:       ${num.toLocaleString(undefined,{style: 'unit',unit: 'mile'})}
        Kilometer:  ${num.toLocaleString(undefined,{style: 'unit',unit: 'kilometer'})}
        Meter:      ${num.toLocaleString(undefined,{style: 'unit',unit: 'meter'})}
        Centimeter: ${num.toLocaleString(undefined,{style: 'unit',unit: 'centimeter'})}
        Gram:       ${num.toLocaleString(undefined,{style: 'unit',unit: 'gram'})}

        `
    console.log(chart)
    window.alert(chart)
} //  Local String Button

document.getElementById('rgbButton').onclick = () => {
    const rgbButton = document.getElementById('rgbButton')

    // This function returns a random integer between 0 and 255
    function randomInt() {
        return Math.floor(Math.random() * 256);
    }
    
  // This function returns a random rgb value as a string

    function randomRGB() {
        // Generate three random integers for red, green and blue components
        let r = randomInt();
        let g = randomInt();
        let b = randomInt();
      
        // Return the rgb value in the format "rgb(r, g, b)"
        return `rgb(${r}, ${g}, ${b})`;
      }

      rgbButton.style.color = randomRGB();
      rgbButton.style.backgroundColor = randomRGB();
} // RGB Button

document.getElementById('hexadecimalButton').onclick = () => {
    let hexadecimalButton = document.getElementById('hexadecimalButton')
    // This function returns a random hexadecimal digit as a string
    function randomHexDigit() {
        // Define an array of possible hexadecimal digits
        let hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
        // Generate a random index between 0 and 15
        let index = Math.floor(Math.random() * 16);
    
        // Return the hexadecimal digit at the random index
        return hexDigits[index];
    }
  
    // This function returns a random hexadecimal value as a string
    function randomHex() {
        // Initialize an empty string to store the hexadecimal value
        let hex = "";
    
        // Loop six times to generate six hexadecimal digits
        for (let i = 0; i < 6; i++) {
        // Append a random hexadecimal digit to the hex string
        hex += randomHexDigit();
        }
    
        // Return the hex value in the format "#hex"
        return `#${hex}`;
    }
    
    hexadecimalButton.style.color = randomHex();
    hexadecimalButton.style.backgroundColor = randomHex();
} // Hexadecimal Button

document.getElementById('arrayButton').onclick = () => {
    let animals = ['jackal','colt','iguana','deer','orangutan','frog'];
    let things = ['lip gloss','sandal','washing machine','tree','rusty nail','shirt','cork','sun glasses','ipod','USB drive','pants','bracelet'];
    let males = ['Zaid','Hayden','Maxim','Jon','Casey','Franklin','Braedon','Cruz','Kason','Dillon','Deshawn','Everett'];
    let females = ['Dayami','Lola','Abagail','Alannah','Jayleen','Casey','Haylie','Liberty','Julianna','Tamara','Kennedy','Rowan'];
    let phoneNumbers = ['(716) 982-3852','(353) 866-5123','(895) 397-1680','(413) 870-0031','(639) 649-6112','(670) 331-1910','(521) 689-3519','(639) 506-6666'];
    let emails = ['seasweb@att.net','parents@yahoo.ca','jhardin@icloud.com','rnewman@att.net','skythe@icloud.com','flaviog@yahoo.com','nogin@comcast.net','heidrich@gmail.com','jeffcovey@live.com','lridener@msn.com','bdthomas@yahoo.ca','harpes@gmail.com'];
    animals.push('marmoset');
    animals.unshift('marten');
    animals.sort().reverse;
    let mixedUp = [...males, ...females, ...phoneNumbers, ...animals, ...emails];
    let arrayArray = [males,females,phoneNumbers,animals,emails];
    mixedUp.push(...emails);
    mixedUp.unshift(...things);
    mixedUp.sort();
    for (mix of mixedUp) {
        console.log(mix);
    }
    
    for (let arrays of arrayArray) {
        console.log(arrays);
        window.alert(arrays);
        for (let items of arrays) {
            console.log(items);
        }
    }

    // Spread Operator = ...
    let num = [1,2,3,4,5,6,7,8,9,0];
    let maximum = Math.max(...num);
    let minimum = Math.min(...num);
    console.log(maximum);
    console.log(minimum);
} // Array Button

document.getElementById('restParamButton').onclick = () => {
    const a = 10;
    const b = 11;
    const c = 12;
    const d = 13;
    const e = 14;
    const f = 15;
    function restParam(...numbers) {
        let total = 0;
        for (let number of numbers){
            total += number;
        }
        return total;
    }   
    console.log(restParam(a,b,c,d,e,f));
    window.alert(`total = ${restParam(a,b,c,d,e,f)}`);
} // Rest Params Button

document.getElementById('callbackButton').onclick = () => {
    // callback =  a function passed to another function
    // invoking a function requires () at the end of the name
    // passing a function a a param should not be invoked

    sum(displayWindow,54,35,763,243,145,4675);
    sum(displayConsole,344,6,4,34,5,432,232,221);

    function sum(functions,...values){
        let result = 0;
        for (let value of values){
            result += value;
        }
        functions(result);
    }
    function displayConsole(output){
        console.log(output);
    }
    function displayWindow(output){
        window.alert(output);
    }
} // Callback Button

document.getElementById('foreachButton').onclick = () => {
    let animals = ['jackal','colt','iguana','deer','orangutan','frog'];

    animals.forEach(printConsole);
    animals.forEach(capitalize);
    animals.forEach(printConsole);

    function capitalize(element, index, array) {
        array[index] = element[0].toUpperCase() + element.substring(1);
    }

    function printConsole(value){
        console.log(value);
    }
} // Foreach Button

document.getElementById('arrayMapButton').onclick = () => {

    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    let square = numbers.map(squared);
    square.forEach(printConsole)

    let cube = numbers.map(cubed);
    cube.forEach(printConsole)

    function squared(element){
        return `${element} squared equals ${Math.pow(element, 2)}`;
    }

    function cubed(element) {
        return `${element} cubed equals ${Math.pow(element, 3)}`;
    }

    function printConsole(element) {
        console.log(element);
    }
} // Array Map Button

document.getElementById('arrayFilterButton').onclick = () => {    
    let Zaid = {
        Name: 'Zaid',
        Age: 32,
        Gender: 'Male'
    }

    let Hayden = {
        Name: 'Hayden',
        Age: 22,
        Gender: 'Male'
    }

    let Braedon = {
        Name: 'Braedon',
        Age: 17,
        Gender: 'Male'
    }

    let John = {
        Name: 'John',
        Age: 2,
        Gender: 'Male'
    }

    let Franklin = {
        Name: 'Franklin',
        Age: 12,
        Gender: 'Male'
    }

    let Maxim = {
        Name: 'Maxim',
        Age: 82,
        Gender: 'Male'
    }

    let Dayami = {
        Name: 'Dayami',
        Age: 54,
        Gender: 'Female'
    };
    
    let Lola = {
        Name: 'Lola',
        Age: 4,
        Gender: 'Female'
    };

    let Abagail = {
        Name: 'Abagail',
        Age: 34,
        Gender: 'Female'
    };

    let Jayleen = {
        Name: 'Jayleen',
        Age: 17,
        Gender: 'Female'
    };

    let Casey = {
        Name: 'Casey',
        Age: 43,
        Gender: 'Female'
    };

    let Alannah = {
        Name: 'Alannah',
        Age: 18,
        Gender: 'Female'
    };

    let people = [Alannah,Casey,Jayleen,Abagail,Lola,Dayami,Maxim,Franklin,Zaid,Hayden,Braedon,John]
    
    people.forEach(getAge);
    people.forEach(getGender);
    
    adults = people.filter(getAdults)
    console.log(adults);

    console.log(people.filter(getChildren));
    console.log(people.filter(getFemales));
    console.log(people.filter(getMales));

    function getGender(element,index,array){
        console.log(`${array[index].Name} is ${array[index].Gender}.`);
    }

    function getAge(element,index,array){
        console.log(`${array[index].Name} is ${array[index].Age} years old.`);
    }

    function getAdults(element,index,array) {
        if (array[index].Age >= 18){
            return array[index];
        }
    }

    function getChildren(element,index,array) {
        if (array[index].Age < 18){
            return array[index];
        }
    }

    function getFemales(element,index,array) {
        if (array[index].Gender === 'Female'){
            return array[index];
        }
    }

    function getMales(element,index,array) {
        if (array[index].Gender === 'Male'){
            return array[index];
        }
    }

} // Array Filter Button

document.getElementById('arrayReduceButton').onclick = () => {
    // backtiks are called template literals `a ${something}`
    let values = [34.54, 495.45, 39234,53, 823.43, 3.43, 9332,32];
    let prices = values.map(setPriceUSD);
    console.log(prices);

    let amount = values.reduce(checkOut);
    console.log(`the total amount will cost you a total of ${amount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})} dollars USD.`);

    function setPriceUSD(input) {
        let price = input.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
        console.log(price);
        return price;
    }

    function checkOut(total, element) {
        return total + element;
    }
} // Array Filter Button
 
document.getElementById('arraySortButton').onclick = () => {
    let grades = [54,69,23,12,5,9,1,100.92,98,87,88,80,70,74,79];

    let descending = grades.sort(descendingOrder);
    let ascending = grades.sort(ascendingOrder);
    console.log(ascending);
    ascending.forEach(printElement);
    console.log(descending);
    descending.forEach(printElement);
    function ascendingOrder(x,y) {
        console.log(`Ascending Order: x = ${x}\nAscending Order: y = ${y}`);
        return y - x;
    }

    function descendingOrder(x,y) {
        console.log(`Descending Order: x = ${x}\nDescending Order: y = ${y}`);
        return x - y;
    }
    function printElement(element){
        console.log(element);
    }
} // Array Sort Button


let count = 0;
const countCounter = document.getElementById('countCounter');
document.getElementById('increaseCountCounterButton').onclick = () => {
    count++;
    countCounter.innerText = count;
    if (count > 0) {
            countCounter.style.color = 'orangered';
        }
    if (count === 0){
            countCounter.style.color = 'white';
        }
}

document.getElementById('resetCountCounterButton').onclick = () => {
    count = 0;
    countCounter.style.color = 'white';
    countCounter.innerText = count;
}

document.getElementById('decreaseCountCounterButton').onclick = function() {
    count--;
    countCounter.innerText = count;
    if (count < 0) {
            countCounter.style.color = 'royalblue';
        }
    if (count === 0){
            countCounter.style.color = 'white';
        }
} // Function Expressions or Anonymous Functions

document.getElementById('arrowFunctionsButton').onclick = () => window.alert('Arrow Function');

document.getElementById('shuffleButton').onclick = () => {
    let cardDeck = ['A','1','2','3','4','5','6','7','8','9','J','Q','K'];
    window.alert(shuffle(cardDeck));
    cardDeck.forEach(card => console.log(card))
    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomizeIndex = Math.floor(Math.random() * array.length);
            currentIndex--;
            let temp = array[currentIndex];
            array[currentIndex] = array[randomizeIndex];
            array[randomizeIndex] = temp;
        }
        return array
    }
} // Shuffle Button

document.getElementById('valueKeyPairsButton').onclick = () => {
    const myStore = new Map([
        ['t-shirt', 20],
        ['jeans', 30],
        ['socks', 10],
        ['jacket', 300],
        ['underwear', 50],
        ['THING', 999999],
    ]);

    myStore.set('hat', 400);
    myStore.set('boots', 350);
    myStore.set('shoes', 500);
    myStore.delete('THING');

    myStore.forEach((value,key) => console.log(`\nValue:\t${value.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}\nKey:\t${key}\n\n`));

    let total = 0;
    let shoppingCart = 0;
    shoppingCart += myStore.get('underwear');
    shoppingCart += myStore.get('jeans');
    shoppingCart += myStore.get('t-shirt');
    console.log(`\ntotal = ${shoppingCart.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}\n\n`);
    console.log(`\nthe store has boots:\t${myStore.has('boots')}\nthe store has THING:\t${myStore.has('THING')}\n\n`);
    console.log(`\nthe store currently has a total of ${myStore.size} items.\n\n`);
} // Map Button

document.getElementById('vehicleButton').onclick = () => {
    const vehicle = {
        Year: 2023,
        Make: 'Toyota',
        Model: 'Corolla',
        Color: 'Blue',
        Price: 25449,
        Fuel: 'Gasoline',
        Transmission: 'Automatic/CVT w/OD',
        Engine: 'Regular Unleaded I-4',
        Drivetrain: 'Front Wheel Drive',
        drive : () => console.log(`\nThe owner of the ${vehicle.Color} ${vehicle.Year} ${vehicle.Make} ${vehicle.Model} is now driving.\n\n`),
        start : () => console.log(`\nThe owner started their ${vehicle.Color} ${vehicle.Year} ${vehicle.Make} ${vehicle.Model}.\n\n`),
        park : () => console.log(`\nThe owner of the ${vehicle.Color} ${vehicle.Year} ${vehicle.Make} ${vehicle.Model} parked their vehicle.\n\n`),
    }

    vehicle.drive();
    vehicle.start();
    vehicle.park();
} // Vehicle Button

document.getElementById('thisButton').onclick = () => {
    const vehicle = {
        Year: 2023,
        Make: 'Toyota',
        Model: 'Corolla',
        Color: 'Blue',
        Price: 25449,
        Fuel: 'Gasoline',
        Transmission: 'Automatic/CVT w/OD',
        Engine: 'Regular Unleaded I-4',
        Drivetrain: 'Front Wheel Drive',

        thisKeyword : function() {
            console.log(`\nThe owner of the ${this.Color} ${this.Year} ${this.Make} ${this.Model} parked this vehicle.\n\n`);
        },
    }
    vehicle.thisKeyword();
    this.name = 'this windows name';
    console.log(this.name);
    console.log(this);
} // This Button

document.getElementById('classButton').onclick = () => {
    class player {
        score = 0;

        pause() {
            console.log('you paused the game');
        }

        exit() {
            console.log('you exited the game');
        }
    }
    const player1 = new player();
    const player2 = new player();
    player1.pause();
    player2.exit();
    player1.score += 1;
    console.log(player1.score);
} // Class Button

document.getElementById('constructorButton').onclick = () => {
    class Student {
        
        constructor(name, age, gpa){
            this.age =  age;
            this.name = name;
            this.gpa = gpa;
        }
        
        study(){
            console.log(`\n${this.name} who is ${this.age} years old is studying.\n${this.name} has a gpa of ${this.gpa}.\n\n`)
        }
    }

    const student1 = new Student('John',49,4.0);
    const student2 = new Student('Cate',24,3.8);
    const student3 = new Student('Bob',29,2.1);
    const student4 = new Student('Alice',87,1.5);    
    student4.study();
    student1.study();
    console.log(student2.age);
    console.log(student3.name);
} // Constructor Button

document.getElementById('staticButton').onclick = () => {
    class vehicle {

        static count = 0;

        constructor(Price,Color,Model){
            this.Price = Price;
            this.Color = Color;
            this.Model = Model;
            this.Year = 2023;
            this.Make = 'Toyota';
            vehicle.count += 1;
        }

        drive(){ 
                console.log(`\nThe owner of the ${this.Color} ${this.Year} ${this.Make} ${this.Model} is now driving.\n\n`);
            }
        start() {
                console.log(`\nThe owner started their ${this.Color} ${this.Year} ${this.Make} ${this.Model}.\n\n`);
            }
        park() {
                console.log(`\nThe owner of the ${this.Color} ${this.Year} ${this.Make} ${this.Model} parked their vehicle.\n\n`);
            }
        static race(){
            console.log('3...2....1...GO!!!');
        }
    }

    const car1 = new vehicle(28983,'red','Corolla');
    const car2 = new vehicle(39983,'pink','Camry');
    const car3 = new vehicle(56323,'black','RAV4');

    car1.drive();
    car2.park();
    car3.start();
    console.log(`vehicle count: ${vehicle.count}`);
    vehicle.race();
} // Static Button

document.getElementById('inheritanceButton').onclick = () => {

    class Animals {

        alive = true;
        
        eat() {
            console.log(`${this.name} is eating`);
        }

        sleep() {
            console.log(`${this.name} is sleeping`);
        }

    }

    class Fish extends Animals {

        name='Salmon';

        swim(){
            console.log(`${this.name} is swimming.`);
        }
    }

    class Bird extends Animals {
        
        name='Hawk';

        fly() {
            console.log(`${this.name} is flying.`);
        }
    }

    const fish1 = new Fish;
    const fish2 = new Fish;
    const bird1 = new Bird;
    const bird2 = new Bird;

    bird2.fly();
    fish1.eat();
    bird1.sleep();
    fish2.swim();

} // Inheritance Button

document.getElementById('superButton').onclick = () => {

    class Animals {

        alive = true;

        constructor(name,age) {
            this.name = name;
            this.age = age;
        }

        eat() {
            console.log(`${this.name} is eating`);
        }

        sleep() {
            console.log(`${this.name} is sleeping`);
        }
    }

    class Bird extends Animals {

        constructor(name,age,flySpeed){
            super(name,age);
            this.flySpeed = flySpeed;
        }

        fly() {
            console.log(`${this.name} is flying.`);
        }
    }

    class Fish extends Animals {

        constructor(name,age,swimSpeed){
            super(name,age);
            this.swimSpeed = swimSpeed;
        }

        swim(){
            console.log(`${this.name} is swimming.`);
        }
    }

    class Mammal extends Animals {

        constructor(name,age,runSpeed){
            super(name,age);
            this.runSpeed = runSpeed;
        }

        run() {
            console.log(`${this.name} is running.`);
        }
    }

    const fish1 = new Fish('Salmon',4,6);
    const bird1 = new Bird('Hawk',2,200);

    const mammal1 = new Mammal('Rabbit',5,12);

    console.log(bird1.age);
    console.log(bird1.name);
    console.log(bird1.flySpeed);
} // Super Button

document.getElementById('getternsetterButton').onclick = () => {
    class Car {
        constructor(power,gas) {
           this._power = power;
           this._gas = gas;
        }

        get getPower() {
            return `this vehicle has ${this._power} hp.`;
        }

        get Gas() {
            return `the gas tank is currently ${this._gas / 50 * 100}% full.`;
        }

        set Gas(value){
            if (value > 50) {
                value = 50;
            }
            else if (value < 0) {
                value = 0;
            }

            this._gas = value;
        }
    }

    let car1 = new Car(433,23);
    console.log(car1.getPower);
    car1.Gas = 100;
    console.log(car1.Gas);
    car1.Gas = -100;
    console.log(car1.Gas);
    car1.Gas = 25;
    console.log(car1.Gas);
} // Getters & Setters Button

document.getElementById('paramsnargsButton').onclick = () => {
    class Vehicle {

        isNew = true;


        constructor(model,year,color){
            this._model = model;
            this._year = year;
            this._color = color;
        }

        set setColor(value){

            this._color = value;
            return value;
        }

    get getColor(){
        console.log(`the color of this ${this._model} is ${this._color}.`);
    }
    
    }

    class Toyota extends Vehicle {
        make = 'Toyota';
        constructor(_model,_year,_color,make){
        super(_model,_year,_color);
        this._make = make;
        }
    }

    const car1 = new Toyota('Corolla','2002','Red','Toyota');
    const car2 = new Toyota('Camry','2023','Green','Toyota');
    const car3 = new Toyota('RAV4','2020','Blue','Toyota');


    car1.setColor = 'Gold';
    car1.getColor;

    displayInfo(car1);
    displayInfo(car2);
    displayInfo(car3);


    function displayInfo(car) {
        console.log(`\n\nthe car model is a ${car._model}`);
        console.log(`the car year is a ${car._year}`);
        console.log(`the car color is a ${car._color}`);
        console.log(`the car make is a ${car._make}`);
        console.log(`this vehicle is new: ${car.isNew}\n\n`);
    }

} // Params & Args Button

document.getElementById('objectArrayButton').onclick = () => {
    
    class Vehicle {

        isNew = true;

        constructor(model,year,color){
            this._model = model;
            this._year = year;
            this._color = color;
        }

        set setColor(value){
            this._color = value;
            return value;
        }

    get getColor(){
        console.log(`the color of this ${this._model} is ${this._color}.`);
    }
    
    }

    class Toyota extends Vehicle {
        make = 'Toyota';
        constructor(_model,_year,_color,make){
        super(_model,_year,_color);
        this._make = make;
        }
    }

    const car1 = new Toyota('Corolla','2002','Red','Toyota');
    const car2 = new Toyota('Camry','2023','Green','Toyota');
    const car3 = new Toyota('RAV4','2020','Blue','Toyota');
    const myCars = [car1,car2,car3];

    myCars[1].setColor = 'Gray'
    myCars[0].setColor = 'Black'

    function getColors(vehicleArray){
        for (let i = 0 ; i < vehicleArray.length ; i++){
            myCars[i].getColor;
        }
    }

    getColors(myCars)

    for (color of myCars){
        color.setColor = 'black'
    }

    getColors(myCars)

} // Object Array