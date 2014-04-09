//Notes
/*dont forget to end
this'n!*/


// var firstName=prompt("What is your first name?");
// var lastName=prompt('And your last name?');
// var fullName=firstName+' '+lastName;
//
// var age=prompt("How old are you?");
// parseInt(age);
// if(age >20){
//   console.log("You can drink! Do it.");
// }
// else{
//   console.log("Lolz, you suck.");
// }
//
// if(age >= 0 && age < 6){ //between 0 and 5
//   console.log('Movie: G');
// }
// else if(age >=6 && age < 13){ //between 6 & 12
//     console.log('Movie: PG');
// }
// else if(age >=13 && age < 18){ //between 13 & 17
//     console.log('Movie: PG-13');
// }
// else{ //over 18
//     console.log('Movie: R');
// }

// var color = prompt('What is your favorite color?');
// color = color.toLowerCase();
// switch(color){
//   case 'blue':
//     console.log(Blue? Good choice!");
//     break;
//   case 'red':
//     console.log("Red? Good choice!");
//     break;
//   case 'green':
//     console.log("Green? Good choice!");
//     break;
//     default:
//     console.log('I don\'t like that color');
// }
//

// var number = prompt('Enter a number, please.');
// number = number * 1;
//
// if(number > 0 && number < 10){
//   while(number <= 50){
//     console.log('Number : ' + number);
//     number += 2;
//   }
// }
//
//
//
// for(var i = 0; i <= 50; i++){
//   console.log('I :' + i);
// }

// var colors = [];
//
// var input = prompt("Please input color or (q)uit");
// input = input.toLowerCase();
// debugger;
// while(input != 'q'){
//   colors.push(input);
//   console.log(colors);
//   var input = prompt("Please input color or (q)uit");
//   input = input.toLowerCase();
// }
// var even = []
// var odd = []
// for(var i = 0; i < 101; i++){
//   var rem = i % 2;
//   if(rem === 0){
//     var squared = i * i;
//     even.push(squared);
//   }
//   else{
//     var cubed = Math.pow(i, 3)
//     odd.push(cubed);
//   }
// }
// console.log(even);
// console.log(odd);

function square(x){
  return x * x;
}
function cube(x){
  return Math.pow(x, 3);
}

function odd(x){
  return x % 2 !== 0;
}
function area(l, w){
  return l * w;
}
function volume(l, w, h){
  return l * w *h;
}
function vol(l, w, h){
  return area(l, w) * h;
}
var z = square(3) + cube(9) - area(3,4) * volume(5,6,7);
//          3*3   +   9*9*9   -    3*4    *    5*6*7
var y = cube(square(3) - cube(2));
var x = area(square(cube(2)), cube(square(3)));


//debugger;
