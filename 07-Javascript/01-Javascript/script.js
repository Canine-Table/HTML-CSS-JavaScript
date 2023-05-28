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

    myCars[1].setColor = 'Gray';
    myCars[0].setColor = 'Black';

    function getColors(vehicleArray){
        for (let i = 0 ; i < vehicleArray.length ; i++){
            myCars[i].getColor;
        }
    }

    getColors(myCars);

    for (color of myCars){
        color.setColor = 'black';
    }

    getColors(myCars);

} // Object Array


document.getElementById('anonymousObjectsButton').onclick = () => {
    class Cards {

        constructor(suit,value) {
            this._suit = suit;
            this._value = value;
        }
    }
    let deck = [
        new Cards("Hearts",'A'),
        new Cards("Spades",'4'),
        new Cards("Dimonds",'King'),
        new Cards("Clubs",'8'),
        new Cards("Hearts",'Jack'),
        new Cards("Spades",'Joker'),
        new Cards("Dimonds",'Queen'),
        new Cards("Clubs",'9'),
    ];

    let getCard = index => {
        console.log(`\n${deck[index]._value} of ${deck[index]._suit}.\n\n`);
    }

    getCard(1);
    getCard(2);
    getCard(5);

    let getDeck = cardDeck => {
        for (let cards of cardDeck) {
            console.log(`\n${cards._value} of ${cards._suit}.\n\n`);
        }
    }

    getDeck(deck);

    deck.forEach(card => console.log(`\n${card._value} of ${card._suit}.\n\n`));
} // Anonymous Objects


document.getElementById("errorPromptButton").onclick = () => {

    try {
            console.clear();
            let input = document.getElementById('errorPromptInput').value;
            input = input.split(" ");
            
            if(isNaN(input[0])) throw 'the first field is not a number!';
            else if(isNaN(input[1])) throw 'the second field is not a number!';
            else if(input === "") throw 'please enter 2 numbers to power.';
            else console.log(Math.pow(input[0], input[1]));
        }
    catch(error) {
            console.log(error);
        } finally { console.log('done.'); }
}

document.getElementById('timoutPromptButton').onclick = () => {

    let item = {
        name: 'Crypto Currency',
        price: '$420.69'
    }

    const firstMessage = () => window.alert(`Buy this ${item.name} course for ${item.price}!`);
    let timeout1 = setTimeout(firstMessage, 3000, item.name, item.price);

    const secondMessage = () => window.alert(`THIS IS NOT A SCAM!`);
    let timeout2 = setTimeout(secondMessage, 6000);

    const thirdMessage = () => window.alert(`DO IT NOW!`);
    let timeout3 = setTimeout(thirdMessage, 9000);

    document.getElementById('buyPromptButton').onclick = () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        window.alert('You make a wise choice. :)');
    }
} // Set Timeout Button

document.getElementById('intervalButton').onclick = () => {
    let count = 0;
    let max = window.prompt('Couny up yo what #?');

    const countUp = max => {
        count++;
        console.log(`count: ${count}`);
        if (count >= max) clearInterval(myTimer);
    }

    let myTimer = setInterval(countUp, 1000, max);
}

document.getElementById('dateObjectButton').onclick = () => {
    
    let currentDate = () => {
        console.clear();
        let date = new Date();
        console.log(date);
        console.log(date.toLocaleDateString());
    }
    setInterval(currentDate, 1000);
} // Date Object Button

document.getElementById('timerButton').onclick = () => {
    console.time('Responce time');
    setTimeout(() => console.log('Hello?',10000));
    window.alert('Time');
    console.timeEnd('Responce time');
} // Timer Button

document.getElementById('promiseButton').onclick = () => {

    /**
     *      Promise = an object that encapsulates the result of an asynchronous operation
     *      let asynchronous methods return values like synchronous methods
     *      "I promise to return something in the future"
     * 
     *      the STATE is 'pending' then: 'fulfilled' or 'rejected'
     *      the RESULT is whay can be returned
     *      2 parts producing and consuming
     */

    const promise1 = new Promise((resolve,reject) => {
        
        let fileLoaded = Math.floor(Math.random() * 2 ) === 1 ? true : false;
        return fileLoaded ? resolve('file has loaded') : reject('file has NOT loaded');
    });

    promise1.then((value) => console.log(value)).catch(error => console.log(error));


    const promise2 =  new Promise(resolve => {
        setTimeout(resolve, 5000);
    });

    promise2.then().finally(value => console.log('done.'));

    const wait = time => new Promise(resolve => {
        setTimeout(resolve, time);
    });

    wait(3000).then(() => console.log('thanks for waiting.')).finally(() => console.log('done.'));
} // Promise Button

document.getElementById('asyncButton').onclick = () => {

    /**
     *      async = makes a function return a promise
     */

    const loadFile = async () => {
        let fileLoaded = Math.floor(Math.random() * 2 ) == 1 ? true : false;
        if (fileLoaded) {
                return 'file has loaded';
            }
        throw 'file has NOT loaded';
    }

    loadFile().then(value => console.log(value)).catch(error => console.log(error)).finally(() => console.log('done 1'));

    const loadFileWithoutAsync = () => {
        let fileLoadedWithoutAsync = Math.floor(Math.random() * 2 ) == 1 ? false : true;
        if (fileLoadedWithoutAsync) {
                return Promise.resolve('file has loaded Without Async');
            }
        throw Promise.reject('file has NOT loaded Without Async');
    }

    loadFileWithoutAsync().then(value => console.log(value)).catch(error => console.log(error)).finally(() => console.log('done 2'));

} // Async Button

document.getElementById('awaitButton').onclick = () => {

    /**
     *      await = makes an async function wait for a promise
     */

    let loadFile = async () => {
        let fileLoaded = Math.floor(Math.random() * 2 ) == 1 ? true : false;
        if (fileLoaded) {
                return 'file has loaded';
            }
        throw 'file has NOT loaded';
    }

    const startProcess = async (load) => {
        try {
                let message = await load();
                console.log(message);
            } catch(error) {
                console.log(error);
            } 
    }

    startProcess(loadFile);
} // Await Button

const theDOM = () => {
    const theDOM = document.getElementById('DOMTab');
    new Map([
        ["display", "flex"],
        ["flexDirection", "columns"],
        ["padding", "15px 10px 10px 20px"],
        ["color", "white"],
        ["backgroundColor", "gray"],
        ["justifyContent", "flex-start"],
        ["alignItems", "flex-start"],
    ]).forEach((value,key) => theDOM.style[key] = value);

    let DOMlabel = document.createElement('label');
    theDOM.appendChild(DOMlabel);
    DOMlabel.innerText = "Document Object Model";
    const theDOMlabelStyle = new Map([
        ["innerText", "Document Object Model"],
        ["fontSize", "36px"],
        ["backgroundColor", "black"],
        ["padding", '10px 30px 10px 30px'],
        ["border", "4px solid white"],
        ["borderRadius", "100px"],
        ["fontWeight", "bolder"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
        ["textAlign", "center"],
        ["marginRight", "20px"],        
    ]);
    theDOMlabelStyle.forEach((value,key) => DOMlabel.style[key] = value);

    let apple = document.createElement('input');
    let orange = document.createElement('input');
    let bannana = document.createElement('input');
    let fruits = [apple,orange,bannana];

    let theFruitAtribs = new Map([
        ["type", "radio"],
        ["class", "theDOMRadio"],
        ["name", "fruits"],
        ["value", fruitName[i]],
    ]);

    let theFruitStyle = new Map([
        ["marginTop", "20px"],
        ["accentColor", "red"],
        ["size", "50px"],
    ]);

    fruits.forEach(setFruits);
    function setFruits(e) {
        theFruitAtribs.forEach((value,key) => e.setAttribute(key, value));
        theFruitStyle.forEach((value,key) => e.style[key] = value );
        theDOM.appendChild(e);
    }

} // DOM Tab

function theChildren() {
    
    /********************************
     * 
     *      .firstElementChild
     *      .lastElementChild
     *      .nextElementSibling
     *      .previousElementSibling
     *      .children[]
     *      Array.from(.children)
     */

    let myChildren = document.getElementById('childrenTab');
    myChildren.style.color = 'white';
    myChildren.style.paddingTop = '10px';
    myChildren.style.overflowY = 'scroll';
    myChildren.style.alignItems = 'flex-start';
    myChildren.lastElementChild.style.backgroundColor = 'gray';
    myChildren.firstElementChild.nextElementSibling.style.backgroundColor = 'brown';
    myChildren.firstElementChild.nextElementSibling.lastElementChild.style.backgroundColor = 'yellow';
    const nameTag = document.createElement('h1');
    nameTag.innerText = 'abc123'; // window.prompt('enter a value');
    myChildren.appendChild(nameTag);

    let myFruits = document.querySelector('#fruits');
    let myMango = document.createElement('li');
    myMango.innerText = 'mango';
    let myPear = document.createElement('li');
    myPear.innerText = 'Pear';
    myFruits.appendChild(myMango);
    myFruits.insertBefore(myPear, myFruits.getElementsByTagName('ol')[1]);

} // Children Tab

document.body.onload = () => {
    console.log('body has loaded.');
} // Body of the DOM has loaded log message

function theEvents() {
    const myEvents = document.getElementById('eventsTab');

    const myEventsStyle = new Map([
        ["backgroundColor","white"],
    ])

    myEventsStyle.forEach((value,key) => myEvents.style[key] = value);
    const myDiv = document.createElement('div');
    const myDivStyle = new Map([
        ["paddingTop", "50px"],
        ["backgroundColor", "black"],
        ["color", "white"],
        ["width", "90%"],
        ["height", "100%"],
        ["border", "5px groove gray"],
        ["display", "flex"],
        ["flexDirection", "column"],
        ["justifyContent", "center"],
        ["alignItems", "center"],
        ["overflowY", "auto"],
        ["overflowX", "hidden"],
        
    ]).forEach((value,key) => myDiv.style[key] = value);
    myEvents.appendChild(myDiv);


    const myLabel = document.createElement('label');
    const myTextBox = document.createElement('input');

    let myTextBoxAttribute = new Map([
        ["id", "myTextBox"],
        ["type", "text"],
        ["name", "childrenTextBox"],
    ]).forEach((value,key) => myTextBox.setAttribute(key, value));

    myTextBoxStyle = new Map([
        ["width", "50%"],
        ["backgroundColor", "white"],
        ["color", "black"],
    ]).forEach((value, key) => myTextBox.style[key] = value);

    const mySpan = document.createElement('span');
    myLabel.innerText = 'Value: ';
    myDiv.appendChild(mySpan);
    mySpan.appendChild(myLabel);
    mySpan.appendChild(myTextBox);

    myDiv.addEventListener("mouseover", () => myDiv.style.backgroundColor = 'blue');
    myDiv.addEventListener("mouseout", () => myDiv.style.backgroundColor = 'green');
    myDiv.addEventListener("mousemove", () => myDiv.style.backgroundColor = 'red');
    myDiv.addEventListener("mousedown", () => myDiv.style.backgroundColor = 'yellow');
    myDiv.onmouseup = () => myDiv.style.backgroundColor = 'pink';
    myDiv.addEventListener("mouseenter", () => myDiv.style.backgroundColor = 'purple', true);
    myTextBox.onchange = () => window.alert('value was changed');

    const myInnerDiv = document.createElement('div');
    const myInnerDivStyle = new Map([
        ["marginTop", "25px"],
        ["backgroundColor", "lightgreen"],
        ["color", "white"],
        ["width", "90%"],
        ["height", "50%"],
        ["border", "5px groove gray"],
        ["display", "inline-flex"],
        ["justifyContent", "center"],
        ["alignItems", "center"],
        ["overflowY", "auto"],
        ["overflowX", "hidden"],
    ]).forEach((value, key) => myInnerDiv.style[key] = value);
    myInnerDiv.addEventListener("mouseover", () => myInnerDiv.style.backgroundColor = 'brown' );
    myInnerDiv.addEventListener("mouseout", () => myInnerDiv.style.backgroundColor = 'lightgreen' );
    myDiv.appendChild(myInnerDiv);
    
    const myDisplayLabel = document.createElement('label');
    const myDisplayLabelStyle = new Map([
        ["fontSize", "36px"],
        ["backgroundColor", "black"],
        ["color", "white"],
        ["padding", '10px 30px 10px 30px'],
        ["border", "4px solid white"],
        ["borderRadius", "100px"],
        ["fontWeight", "bolder"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
        ["textAlign", "center"],
    ]).forEach((value, key) => myDisplayLabel.style[key] = value);
    myDisplayLabel.innerText = 'Hello World';
    myInnerDiv.appendChild(myDisplayLabel);

    const myDisplayCheckBox = document.createElement('input');
    const myCheckBoxAttribute = new Map([
        ["id", "myCheckBox"],
        ["type", "checkbox"],
        ["name", "myDisplayCheckBox"],
        ["value", "isSelected"],
    ]).forEach((value,key) => myDisplayCheckBox.setAttribute(key, value));
    const myCheckBoxStyle = new Map([
        ["accentColor", "red"],
        ["height", "25px"],
        ["width", "25px"],
        ["marginLeft", "15px"],
        ["marginRight", "15px"],
        ["marginTop", "25px"],
    ]).forEach((value, key) => myDisplayCheckBox.style[key] = value);

    const mySpace = document.createElement('br');
    const mySpacer = document.createElement('hr');
    mySpan.appendChild(mySpace);
    mySpan.appendChild(mySpacer);
    mySpan.appendChild(myDisplayCheckBox);

    const myDisplayCheckBoxLabel = document.createElement('label');
    const myDisplayCheckBoxLabelAttribute = new Map([
        ["for", "myCheckBox"],
        ["name", "myDisplayCheckBoxLabel"],    
    ]).forEach((value,key) => myDisplayCheckBoxLabel.setAttribute(key, value));
    new Map([
        ["backgroundColor", "black"],
        ["color", "white"],
        ["fontSize", "36px"],
        ["padding", '10px 30px 10px 30px'],
        ["fontWeight", "bolder"],
        ["borderRadius", "100px"],
        ["border", "4px solid white"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
    ]).forEach((value, key) => myDisplayCheckBoxLabel.style[key] = value);

    myDisplayCheckBox.addEventListener("click", CheckedValue);
    function CheckedValue() {
        let getCheckedValue = document.getElementById('myCheckBox');
        myDisplayCheckBoxLabel.innerText = getCheckedValue.checked ? 'Hidden' : 'Visible';
        myDisplayLabel.style.display = myDisplayLabel.style.display == 'none' ? 'block' : 'none';
    }
    myDisplayCheckBoxLabel.innerText = 'Visible';
    mySpan.appendChild(myDisplayCheckBoxLabel);
} // Events Tab

function theKeys() {
    document.getElementById('keysTab').style.position = 'relative';
    const myLabel = document.getElementById('undefinedKeyLabel');
    const myLabelStyle = new Map([
        ["color", "white"],
        ["fontSize", "36px"],
        ["fontWeight", "bolder"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
    ]).forEach((value, key) => myLabel.style[key] = value);
    const rgbButton = document.getElementById('rgbButton');

    function randomInt() {
        return Math.floor(Math.random() * 256);
    }
    

    function randomRGB() {
        let r = randomInt();
        let g = randomInt();
        let b = randomInt();
      
        return `rgb(${r}, ${g}, ${b})`;
      }
    

    const moveDiv = document.getElementById('moverDiv');
    new Map([
        ["backgroundColor", "lightgreen"],
        ["borderRadius", "100vw"],
        ["border", "2px solid white"],
        ["height", "10px"],
        ["width", "10px"],
        ["position", "absolute"],
        ["top", "10px"],
        ["left", "10px"],
    ]).forEach((value, key) => moveDiv.style[key] = value);
    let x = 10;
    let y = 10;
    const keysTab = document.getElementById('keysTab');
    const keyListener = document.querySelector('body');
    keyListener.addEventListener("keydown", event => {
        myLabel.style.color = randomRGB();
        myLabel.innerText = event.key;
        console.log(event.key);
        switch(event.key){
            case "ArrowUp":
                y-=5;
                moveDiv.style.top = y + 'px';;
                break;
            case "ArrowRight":
                x+=5;
                moveDiv.style.left = x + 'px';
                break;
            case "ArrowDown":
                y+=5;
                moveDiv.style.top = y + 'px';
                break;
            case "ArrowLeft":
                x-=5;
                moveDiv.style.left = x + 'px';
                break;
            default:
                break;
        }
    });
} // Keys Tab

function theAnimations(){
    const animationsBackground = document.getElementById('animationsTab');
    const MovingDiv = document.getElementById('animationsMoverDiv');
    const xDiv = document.getElementById('animationsXDiv');
    const yDiv = document.getElementById('animationsYDiv');
    const DiagonalDiv10 = document.getElementById('animationsDiagonalDiv10');
    const DiagonalDiv100 = document.getElementById('animationsDiagonalDiv100');
    const DiagonalDiv1000 = document.getElementById('animationsDiagonalDiv1000');
    const BouncingDiv = document.getElementById('animationsBouncingDiv');
    
    new Map([
        ["border", "2px solid white"],
        ["height", "25px"],
        ["width", "25px"],
        ["position", "absolute"],
        ["top", "10px"],
        ["left", "10px"],
    ]).forEach((value, key) => {
        MovingDiv.style[key] = value;
        DiagonalDiv10.style[key] = value;
        DiagonalDiv100.style[key] = value;
        DiagonalDiv1000.style[key] = value;
        xDiv.style[key] = value;
        yDiv.style[key] = value;
        BouncingDiv.style[key] = value;
    });

    function randomInt(min,max) {
        return Math.floor(Math.random() * max) + min;
    }


    function randomRGB() {
        let r = randomInt(0,255);
        let g = randomInt(0,255);
        let b = randomInt(0,255);
      
        return `rgb(${r}, ${g}, ${b})`;
      }

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let rz = 0;
   setInterval(MovingDivs, 10);
    function MovingDivs(){
        if ( x < 0){
                x = animationsBackground.clientWidth - 29;
            }
        else if (x > animationsBackground.clientWidth - 29) {
            x = 0;
        }
        
        if (y < 0){
                y = animationsBackground.clientHeight  - 29;
            }
        else if ( y > animationsBackground.clientHeight - 29){
            y = 0;
        }
        MovingDiv.style.backgroundColor = randomRGB()
        MovingDiv.style.borderColor = randomRGB()
        MovingDiv.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                            +"rotateZ("+randomInt(0,360)+"deg)";
                            +"rotateX("+randomInt(0,360)+"deg)";
        MovingDiv.style.backgroundColor = randomRGB();
        switch(randomInt(1,4)){
            case 1:
                y--;
                MovingDiv.style.top = y + 'px';
                break;
            case 2:
                x++;
                MovingDiv.style.left = x + 'px';
                break;
            case 3:
                y++;
                MovingDiv.style.top = y + 'px';
                break;
            case 4:
                x--;
                MovingDiv.style.left = x + 'px';
                break;
            default:
                break;
        }
    }

    let bx = 0; // initial x position
    let by = 0; // initial y position
    let dx = 1; // initial x direction
    let dy = -1; // initial y direction
    setInterval(BouncingDivs, 1); // call bounce every second
    function BouncingDivs() {
        // update x position by adding dx * speed
        bx = bx + dx;
        // update y position by adding dy * speed
        by = by + dy;
        // check if x position reaches the right edge
        if (bx >= animationsBackground.clientWidth - 29 ) {
            // change x direction to left
            dx = -1;
        }
        // check if x position reaches the left edge
        if (bx <= 0) {
            // change x direction to right
            dx = 1;
        }
        // check if y position reaches the bottom edge
        if (by >= animationsBackground.clientHeight -29 ) {
            // change y direction to up
            dy = -1;
        }
        // check if y position reaches the top edge
        if (by <= 0) {
            // change y direction to down
            dy = 1;
        }
        // update the style of the div with the new position
        BouncingDiv.style.top = by + 'px';
        BouncingDiv.style.left = bx + 'px';
        BouncingDiv.style.backgroundColor = randomRGB();
        BouncingDiv.style.borderColor = randomRGB();
        BouncingDiv.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                            +"rotateZ("+randomInt(0,360)+"deg)";
                            +"rotateX("+randomInt(0,360)+"deg)";
        
    }

    setInterval(xDivs, 10);
    function xDivs(){
        xDiv.style.left = bx + 'px';
        xDiv.style.backgroundColor = randomRGB();
        xDiv.style.borderColor = randomRGB();
        xDiv.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                            +"rotateZ("+randomInt(0,360)+"deg)";
                            +"rotateX("+randomInt(0,360)+"deg)";
    }
        

    setInterval(yDivs, 10);
    function yDivs(){
        yDiv.style.top = by + 'px';
        yDiv.style.backgroundColor = randomRGB();
        yDiv.style.borderColor = randomRGB();
        yDiv.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                            +"rotateZ("+randomInt(0,360)+"deg)";
                            +"rotateX("+randomInt(0,360)+"deg)";
    }

    setInterval(DiagonalDivs10, 10);
    function DiagonalDivs10(){
        DiagonalDiv10.style.top = by + 'px';
        DiagonalDiv10.style.left = bx + 'px';
    }
    setInterval(DiagonalDivs100, 100)
    function DiagonalDivs100(){
        DiagonalDiv100.style.top = by + 'px';
        DiagonalDiv100.style.left = bx + 'px';
    }

    let scaleX = 0;
    let ScaleY = 3;
    setInterval(DiagonalDivs1000, 100)
    let doneX = false;
    function DiagonalDivs1000(){
        bx = bx + dx;
        by = by + dy;
        if (bx >= animationsBackground.clientWidth - 29 ) {
            dx = -2;
        }
        if (bx <= 0) {
            dx = 3;
        }
        if (by >= animationsBackground.clientHeight -29 ) {
            dy = -4;
        }
        if (by <= 0) {
            dy = 5;
        }
        DiagonalDiv1000.style.top = by + 'px';
        DiagonalDiv1000.style.left = bx + 'px';
        if (doneX == false ){
                scaleX+=0.4;
                ScaleY-=0.4;
                if (scaleX >= 3){
                    doneX = true;
                }
            }
        else {
            scaleX-=0.4;
            ScaleY+=0.4;
            if (scaleX <= 0){
                    doneX = false;
                }
        }
        
        DiagonalDiv1000.style.backgroundColor = randomRGB();
        DiagonalDiv1000.style.borderColor = randomRGB();
        DiagonalDiv1000.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                                        +"rotateZ("+randomInt(0,360)+"deg)";
                                        +"rotateX("+randomInt(0,360)+"deg)";
                                        +"scale("+scaleX+","+ScaleY+")";
        DiagonalDiv100.style.backgroundColor = randomRGB()
        DiagonalDiv100.style.borderColor = randomRGB()
        DiagonalDiv100.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                                        +"rotateZ("+randomInt(0,360)+"deg)";
                                        +"rotateX("+randomInt(0,360)+"deg)";
                                        +"scale("+scaleX+","+ScaleY+")";
        DiagonalDiv10.style.backgroundColor = randomRGB();
        DiagonalDiv10.style.borderColor = randomRGB();
        DiagonalDiv10.style.transform = "rotateY("+randomInt(0,360)+"deg)";
                                        +"rotateZ("+randomInt(0,360)+"deg)";
                                        +"rotateX("+randomInt(0,360)+"deg)";
                                        +"scale("+scaleX+","+ScaleY+")";
    }
} // Animation Tab

function theCanvas() {
    const myCanvasDiv = document.getElementById('canvasTab');
    let myCanvas = document.createElement("canvas");
    let myCanvasContext = myCanvas.getContext('2d');
    new Map([
        ["height", "calc(100% - 25px)"],
        ["backgroundColor", "black"],
        ["width", "calc(100% - 25px)"],
        ["position", "absolute"],
        ["border", "10px groove white"],
    ]).forEach((value,key) => myCanvas.style[key] = value);
    myCanvasDiv.appendChild(myCanvas);
   // myCanvasDiv.appendChild(myCanvasContext);

    myCanvasContext.beginPath();
    myCanvasContext.strokeStyle = "red";
    myCanvasContext.lineWidth = 10;
    myCanvasContext.moveTo(50,50);
    myCanvasContext.lineTo(175,50);
    myCanvasContext.stroke();

    myCanvasContext.beginPath();
    myCanvasContext.strokeStyle = "green";
    myCanvasContext.lineWidth = 5;
    myCanvasContext.moveTo(50,50);
    myCanvasContext.lineTo(125,125);
    myCanvasContext.stroke();


    myCanvasContext.beginPath();
    myCanvasContext.lineWidth = 2.5;
    myCanvasContext.strokeStyle = "blue";
    myCanvasContext.moveTo(50,50);
    myCanvasContext.lineTo(50,125);
    myCanvasContext.stroke();

    myCanvasContext.beginPath();
    myCanvasContext.fillStyle = "purple";
    myCanvasContext.lineWidth = 5;
    myCanvasContext.strokeStyle = "violet";
    myCanvasContext.moveTo(100,50);
    myCanvasContext.lineTo(50,125);
    myCanvasContext.lineTo(150,125);
    myCanvasContext.moveTo(150,125);
    myCanvasContext.lineTo(100,50);
    myCanvasContext.fill();
    myCanvasContext.stroke();

    myCanvasContext.beginPath();
    myCanvasContext.fillStyle = "yellow";
    myCanvasContext.strokeStyle = "orange";
    myCanvasContext.lineWidth = "10";
    myCanvasContext.fillRect(5,5,100,50)
    myCanvasContext.strokeRect(5,5,100,50)

    myCanvasContext.beginPath();
    myCanvasContext.fillStyle = "gray";
    myCanvasContext.strokeStyle = "brown";
    myCanvasContext.lineWidth = "3";
    myCanvasContext.arc(200,75, 50, 2, 2 * Math.PI); // (x, y, r, eAngle, counterclosewize)
    myCanvasContext.arc(200,75, 50, 4, 2 * Math.PI, true)
    myCanvasContext.arc(200,75, 0, 6, 2 * Math.PI)
    myCanvasContext.arc(200,75, 33, 8, 2 * Math.PI)
    myCanvasContext.arc(200,75, 33, 8, 2 * Math.PI, true)
    myCanvasContext.fill()
    myCanvasContext.stroke();

    myCanvasContext.beginPath()
    myCanvasContext.fillStyle = "white";
    myCanvasContext.lineWidth = "10";
    myCanvasContext.textAlign = 'center';
    myCanvasContext.font = '48px MV Boli';
    myCanvasContext.fillText('Hello Canvas', myCanvas.width / 2, myCanvas.height / 2);
} // Canvas Tab
function theWindow(){
    const myWindow = document.getElementById("theWindowTab");
    const myPicture = document.getElementById('myPicture');
    const myOpenButton = document.createElement('button')
    myOpenButton.innerText = 'Open';
    myWindow.appendChild(myOpenButton);
    myOpenButton.addEventListener("click", () => window.open("https://www.google.com"));
    const myCloseButton = document.createElement('button');
    myCloseButton.innerText = 'Close';
    myCloseButton.addEventListener("click", () => window.close());
    myWindow.appendChild(myCloseButton);
    const myPrintButton = document.createElement('button');
    myPrintButton.innerText = 'Print';
    myWindow.appendChild(myPrintButton);
    myPrintButton.addEventListener("click", () => window.print());

    const myConfirmButton = document.createElement('button');
    myConfirmButton.innerText = 'Confirm';
    myWindow.appendChild(myConfirmButton);
    myConfirmButton.addEventListener("click", () => window.confirm('confirmation of ok'));

    const myPromptButton = document.createElement('button');
    myPromptButton.innerText = 'Prompt';
    myWindow.appendChild(myPromptButton);
    myPromptButton.addEventListener("click", () => window.prompt('enter a value'));

    const myAlertButton = document.createElement('button');
    myAlertButton.innerText = 'Alert';
    myWindow.appendChild(myAlertButton);
    myAlertButton.addEventListener("click", () => window.alert('an alert'));

    console.dir(window);
    console.log(`outerHeight: ${window.outerHeight}`);
    console.log(`outerWidth: ${window.outerWidth}`);
    console.log(`innerWidth: ${window.innerWidth}`);
    console.log(`innerWidth: ${window.innerWidth}`);
    console.log(`scrollX: ${window.scrollX}`);
    console.log(`screenY: ${window.screenY}`);
    console.log(`before Href: ${window.location.href}`);
    //const windowHref = window.location.href = 'https://www.google.com'
    console.log(`set Href: ${window.location.href}`);

    console.log(`IP Address: ${window.location.hostname}`);
    console.log(`Path: ${window.location.pathname}`);


} // Window Tab

function theCookies() {
    const theCookiesTab = document.getElementById('theCookiesTab');
    const theCookieDiv = document.createElement('div');
    new Map([
        ["height", "100%"],
        ["backgroundColor", "black"],
        ["color", "white"],
        ["width", "calc(100% - 25px)"],
        ["position", "absolute"],
        ["border", "10px groove white"],
        ["display", "flex"],
        ["flexDirection", "column"],
        ["overflowY", "auto"],
        ["justifyContent", "center"],
        ["alignItems", "center"],
        ["fontWeight", "bolder"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
    ]).forEach((value,key) => theCookieDiv.style[key] = value);
    theCookiesTab.appendChild(theCookieDiv)
    const myFirstName = document.createElement('label');
    myFirstName.innerText = 'first name: '
    const myFirstNameTextBox = document.createElement('input');
    new Map([
        ["id", "myFirstNameTextBox"],
        ["type", "text"],
    ]).forEach((value,key) => myFirstNameTextBox.setAttribute(key, value));
    const myFirstNameSpan = document.createElement('span');
    ([myFirstName,myFirstNameTextBox,BR()]).forEach(element => myFirstNameSpan.appendChild(element));
    const myLastName = document.createElement('label');
    myLastName.innerText = 'last name: '
    const myLastNameTextBox = document.createElement('input');
    new Map([
        ["id", "myFirstNameTextBox"],
        ["type", "text"],
    ]).forEach((value,key) => myFirstNameTextBox.setAttribute(key, value));
    const myLastNameSpan = document.createElement('span');
    ([myLastName,myLastNameTextBox,BR()]).forEach(element => myLastNameSpan.appendChild(element));
    new Map([
        ["marginLeft","5px"],
    ]).forEach((value,key) => {
        myFirstNameSpan.style[key] = value
        myLastNameSpan.style[key] = value
    });
    const mySubmitButton = document.createElement('button');
    mySubmitButton.innerText = 'Query Submit';
    mySubmitButton.addEventListener("click", () => {

        setCookie('firstName', myFirstNameTextBox.value, 365)
        setCookie('lastName', myLastNameTextBox.value, 365)
        function setCookie(name, value, dayToLive){
            let myDate = new Date();
            myDate.setTime(myDate.getTime() + (dayToLive * 24 * 60 * 60 * 1000));
            let expiredCookie = myDate.toUTCString();
            document.cookie = `${name}=${value}; expires=${expiredCookie}; path=/;`;
        }
        console.log(document.cookie)        
    });
    function BR(){
        return document.createElement('br');
    }

    new Map([
        ["height", "30%"],
        ["width", "60%"],
        ["fontFamily", "'Times New Roman', Times, serif"],
    ]).forEach((value,key) => {
        myFirstNameTextBox.style[key] = value
        myLastNameTextBox.style[key] = value
    });


    const myCookieButton = document.createElement('button');
    myCookieButton.innerText = "Cookie Submit";
    new Map([
        ["border", "4px solid white"],
        ["borderRadius", "100px"],
        ["textAlign", "center"],
    ]).forEach((value, key) => {
        myCookieButton.style[key] = value
        mySubmitButton.style[key] = value
    });

    myCookieButton.onclick = () => {
        console.log(`cookieEnabled: ${navigator.cookieEnabled}`);
        document.cookie = "firstname=bob; expires=Sun, 17 January 2099 12:00:00 UTC; path=/";
        document.cookie = "firstname=alice; expires=Sun, 19 January 2999 12:00:00 UTC; path=/";
        document.cookie = "firstname=user1; expires=Sun, 21 January 2909 12:00:00 UTC; path=/";

        setCookie("firstnames","alice",365);
        setCookie("firstnames","user1",730);
        deleteCookie("fitname");
        deleteCookie('fitname4; fitname3; fitname2; fitname1; fitname0; firstnames; firstname4; firstname3; firstname0; firstname');
        console.log(`cookies: ${document.cookie}`);
        setCookie("firstName_0","alice","365");
        setCookie("firstName_1","bob","330");
        setCookie("firstName_2","user1","730");
        console.log(`cookies: ${document.cookie}`);

        console.log(`Name: ${getCookie("firstName_0",false)}`)
        console.log(`Name: ${getCookie("firstName_1",false)}`);
        console.log(`Name: ${getCookie("firstName_2",false)}`)
        console.log(getCookie('firstName_0; firstName_1; firstName_2;'));

        function setCookie(name, value, dayToLive){
            let myDate = new Date();
            myDate.setTime(myDate.getTime() + (dayToLive * 24 * 60 * 60 * 1000));
            let expiredCookie = myDate.toUTCString();
            document.cookie = `${name}=${value}; expires=${expiredCookie}; path=/;`;
        }

        function deleteCookie(names){
            let name =names.split('; ')
            name.forEach((name) => setCookie(name, null, null))
        }

        function getCookie(name,version=true){
            const cDecoded = decodeURIComponent(document.cookie)
            let cArray = cDecoded.split("; ")
            if (version === true) {
                cArray = cArray.filter(element => function(element){
                    return element !== undefined
                }); 

                try {
                    console.log(`${cArray.forEach(element => console.log(`\n${element}\n\n`))}`);
                } catch(error) {
                    console.log(`Error: ${error}`)
                }
            }
            if  (version === false) {
                let result = null;
                cArray.forEach(element => {
                    if(element.indexOf(name) == 0){
                        result = element.substring(name.length + 1);
                    }
                });
                return result;
            }
        }
    }
 
    ([BR(),myFirstNameSpan,myLastNameSpan,BR(),mySubmitButton,BR(),myCookieButton,BR()]).forEach(element => theCookieDiv.appendChild(element));
}

function theStopWatch(){
    const theStopWatchTab = document.getElementById('stopWatchTab');
    const theStopWatchDiv = document.createElement('div');
    new Map([
        ["height", "100%"],
        ["backgroundColor", "inherit"],
        ["width", "100%"],
        ["position", "absolute"],
        ["border", "10px groove white"],
        ["display", "flex"],
        ["flexDirection", "column"],
        ["overflowY", "auto"],
    ]).forEach((value,key) => theStopWatchDiv.style[key] = value);
    theStopWatchTab.appendChild(theStopWatchDiv);
    const Spacer = () => {return document.createElement('br')};
    const theStopWatchLabel = document.createElement('label');
    new Map([    
        ["width", "100%"],
        ["height", "80%"],
        ["color", "green"],
        ["fontSize", "36px"],
        ["fontWeight", "bolder"],
        ["fontFamily", "'Times New Roman', Times, serif"],
        ["display", "inline-flex"],
        ["justifyContent", "center"],
        ["alignItems", "center"],
    ]).forEach((value,key) => theStopWatchLabel.style[key] = value);
    theStopWatchLabel.innerText = '00:00:00:000';
    const theStopWatchButtonSpan = document.createElement('span');
    new Map([    
        ["width", "100%"],
        ["display", "flex"],
        ["flexDirection", "row"],
        ["justifyContent", "center"],
    ]).forEach((value,key) => theStopWatchButtonSpan.style[key] = value);

    const theStopWatchStartButton = document.createElement('button');
    theStopWatchStartButton.innerText = 'Start'
    const theStopWatchPauseButton = document.createElement('button');
    theStopWatchPauseButton.innerText = 'Pause';
    const theStopWatchResetButton = document.createElement('button');
    theStopWatchResetButton.innerText = 'Reset';
    new Map([    
        ["marginInline","10px"],
        ["paddingInline","10px"],
        ["paddingTop","5px"],
        ["paddingBottom","5px"],
        ["backgroundColor", "black"],
        ["color", "white"],
        ["fontSize", "16px"],
        ["fontWeight", "bolder"],
        ["borderRadius", "100px"],
        ["border", "2px solid white"],
        ["fontStyle", "italic"],
        ["fontFamily", "'Times New Roman', Times, serif"],
    ]).forEach((value,key) => {
        theStopWatchStartButton.style[key] = value
        theStopWatchPauseButton.style[key] = value
        theStopWatchResetButton.style[key] = value
    });

    ([Spacer(),theStopWatchStartButton,theStopWatchPauseButton,theStopWatchResetButton,Spacer(),]).forEach((element) => theStopWatchButtonSpan.appendChild(element));
    ([theStopWatchLabel,theStopWatchButtonSpan,Spacer(),]).forEach((element) => theStopWatchDiv.appendChild(element));

    let startTime = 0;
    let elapsedTime = 0;
    let currentTime = 0;
    let paused = true;
    let intervalID;
    let hrs = 0;
    let mins = 0;
    let secs = 0;
    let millis = 0;
    theStopWatchStartButton.addEventListener("click", () => {
        if (paused) {
            paused = false;
            startTime = currentTime;
        } else {
        }
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime,1);
    });
    
    theStopWatchPauseButton.addEventListener("click", () => {
        if (!paused){
            paused = true;
            elapsedTime = currentTime;
            clearInterval(intervalID)
        }
    })

    theStopWatchResetButton.addEventListener("click", () => {
        if (paused){
            paused = false;
        }
            clearInterval(intervalID)
            theStopWatchLabel.innerText = '00:00:00:000';
            startTime = 0;
            elapsedTime = 0;
            currentTime = 0;
            hrs = 0;
            mins = 0;
            secs = 0;
            millis = 0;
    });

    function updateTime(){
        let mPad = '';
        currentTime = elapsedTime
        elapsedTime = Date.now() - startTime;
        millis = elapsedTime % 1000;
        if ((elapsedTime % 1000) == 0) {
            mPad = 000;
        }
        else if ((elapsedTime % 1000) <= 9) {
            mPad = 00;
        }
        else if ((elapsedTime % 1000) <= 99) {
            mPad = 0;
        }
        secs = Math.floor((elapsedTime / 1000) % 60);
        mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hrs = Math.floor((elapsedTime / (1000 * Math.pow(60,2))) % 60);
        theStopWatchLabel.innerText = `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${mPad}${millis}`;
    }
    function pad(unit){
        return (("0")+unit).length > 2 ? unit : "0" + unit;
    }
}
// console.log(`: ${}`);
