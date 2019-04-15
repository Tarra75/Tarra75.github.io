console.log('hello world');



console.log(12*45);
console.log(5+5);
//don't need quotes for math equations




console.log(Math.random()*50);
//generates random number




console.log(Math.floor(Math.random()*50));
//math.floor rounds to a whole number

// use /* */ to comment out large chunks of text




var myFirstName = 'Tarra';
console.log(myFirstName);
//the first word is lowercase and every new word after that is
// upper case




var todaysTemp = 75;
console.log(todaysTemp);

todaysTemp = 50;
console.log(todaysTemp);




var userName = 'Tarra';
console.log('Welcome Back ' + userName + ".");





var needCoffee = true;
if (needCoffee) { 
//If true do this
console.log('you need coffee');
}
else {
// if false do this
console.log('all good for now');
}

var needCoffee = 5;
if (needCoffee > 10) { 
//If true do this
console.log('you need coffee');
}
else {
// if false do this
console.log('all good for now');
}




/* var moonPhase = 'full';
if (moonPhase === 'full') { 
console.log('full moon');
}
else {
console.log('howl');
}
*/
// two full values are equal






var lightColor  = "yellow";

if (lightColor === "green") {
    console.log('go')
}
    else if (lightColor === 'yellow') {
        console.log('slow down');
    }
    else if (lightColor === 'red') {
        console.log('stop');
    }
    else {
        console.log("system fault");
    }
// use && for and for both conditions to be true
// use || for or for either condition to be true




var pedestrians = true; 
var lightColor = "green";

if (lightColor === "green" && pedestrians === false)
console.log("you can go");
 else {
    console.log('stop');
}




/*
var calculatorPower = false;

function powerSwitch() {
    console.log("You're trying to turn the power on");
}

powerSwitch();
powerSwitch();
*/



/*
function multiplyByANumber(inputNumber1, inputNumber2) {
    console.log(inputNumber1 * inputNumber2);
}

multiplyByThirteen(9, 9);
multiplyByThirteen(5, 5);
multiplyByThirteen(13, 5);
*/



function divideNumbers (number1, number2) {
    return number1 / number2;
}

console.log(divideNumbers (5,25));






/*
var globalVariable = "Laundry Room";

function myApartment () {
    var functionalVariable = "my tv";
    console.log("I can get to " + functionalVariable);
    console.log("I can get to " + globalVariable);

}

myApartment();
/*
console.log("I can get to" + globalVariable);
console.log("I can get to" + functionalVariable)
*/











var myFirstArray = ["item1", "item2", "item3", "item4"]
// array can have any data types like strings or numbers

console.log(myFirstArray[3]);
console.log(myFirstArray.length);
// the number you enter is the number of the list item that will show
// .length will tell you how many items are in an array


for(var i = 0; i < myFirstArray.length; i++) {
    console.log(myArray[i]);
}



var animalArray = ["bug", "dog", "cat"];

for(var i = 0; condition2; i++) {
    console.log(animalArray[i]);
}















