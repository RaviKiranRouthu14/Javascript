/*
/************
* variable and data types
*/
/*

var firstName = 'john';
console.log(firstName);

var lastname = 'smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);

// variale naming rules
var 3years = 3;
var johnMark = 'John and mark'
var if = 23;
*/

/************* 
* variable mutation and type coercion
*/


var firstName = 'john';
var age = 28;

// type coercion

//console.log(firstName + ' ' + age);
var job, isMarried;
job = 'Teacher';
isMarried = false;
// console.log(firstName + ' is a ' + age + 'year old' + job + '.Is he married ? ' + isMarried);


// variable mutation
age = 'twenty eight';
job = 'driver';
//alert(firstName + ' is a ' + age + 'year old' + job + '.Is he married ? ' + isMarried);


//var lastName = prompt('what is his lasr name');
//console.log(firstName + ' ' + lastName);


/*************************
* Basic operators
 */
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//math operators
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;
/*console.log(yearJohn);
console.log(now + 2);
console.log(now + 2);
/*console.log(now /10);


//logical operators
var johnOlder = ageJohn < ageMark;
/*console.log(johnOlder);

//type of operator

/*console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
/*console.log( typeof x);



/**************
* operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge;

/*console.log(isFullAge);
//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ageJohn + ageMark / 2;
/*console.log(average);

//Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
/*console.log(x, y);

// more operators
x *= 2;
console.log(x);
x *= 10;
/*console.log(x);/

/****************
 
 */
/* var massMark = 78; // kg 
 var heigtMark = 1.69 // meters

 var massJohn = 92; 
 var heightJohn = 1.95;

 var BMIMark = massMark / (heigtMark * heigtMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
var markhigherBMI = BMIMark > BMIJohn;
console.log('Is mark\'s eBMI higher than John\'s?' + markhigherBMI);


/***********
 *  If / else starements
 */


 var firstName = 'John';
 var civilstatus = 'single';

 if(civilstatus === 'married')
 {
     console.log(firstName + ' is married!');
 }
 else
 {
     //console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;;
 if(isMarried)
 {
     //console.log(firstName + ' is married!');
 }
 else
 {
    // console.log(firstName + ' will hopefully marry soon :)');
 }



 var massMark = 78; // kg 
 var heigtMark = 1.69 // meters

 var massJohn = 92; 
 var heightJohn = 1.95;

 var BMIMark = massMark / (heigtMark * heigtMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn)
{
    //console.log('Mark\' BMI is higher than John\'s.');
}
else
{
    //console.log('John\' BMI is higher than Mark\'s.');
}

/**************
 * Boolean logic
 */
 var firstName = 'John';
 var age = 20;
  

 if (age < 13)
 {
     //console.log(firstName + 'is a boy.');
 }
 else if (age >= 13 && age < 20) 
 { 
    
//console.log(firstName + ' is a teenager.');
 }
else if (age > 20 && age < 30)
{
    //console.log(firstName + 'is a young man.');
}
else 
{
    //console.log (firstName + 'is a man.');
}

/******************************
 * The terinary opersmentator and swith state
 */

var firstName = 'John';
var age = 22;
//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

//Swith statement
// var job = 'driver'
// switch (job)
// {
// case 'teacher':
// console.log(firstName + ' teaches kids how to code. ');
// break;
// case 'driver':
//     console.log(firstName + ' drives an uber in lisbon. ');
//     break;
// case 'designer':
//     console.log(firstName + 'degigns good websites. ');
// break;
// default:
//     console.log(firstName + ' does something else. ');
  
// }

// age = 56;
// switch(true)
// {
//     case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//     case age >= 13 && age < 20:
//      console.log(firstName + ' is a teenager.'); 
//      break;
//      case age > 20 && age < 30:
//      console.log(firstName + ' is a young man.'); 
//      break;
//      default:
//     console.log(firstName + ' is a man.');
// }


/**************
 * Truthy and falsy values and equality operator
 */
 
// var height;
// height = '23';

// if(height || height ===0 )
// {
// console.log('variable is defined');
// }
// else
// {
//     console.log('Variable is undefined');
// }

// //equality operators
// if(height == '23')
// {
//     console.log('the == operator does type coercion!');
// }

//coding challange 2n0
// var scoreJohn = (110 + 120 + 103) / 3;
// var scoreMark = (119 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMark, scoreMary);
// if(scoreJohn > scoreMark && scoreJohn > scoreMark)
// {
//     consosle.log('john\'s team wins with ' + scoreJohn + ' points ')
// }
// else if (scoreMark > scoreJohn && scoreMark > scoreMary)
// {
//     console.log('mark\'s team wins with ' + scoreMark + ' points ')
// }
// else if ( scoreMary > scoreJohn && scoreMary > scoreMark )
// {
//     console.log('mary\'s team wins with ' + scoreMary + ' points ')
// }
// else
// {
//     console.log(' There is a draw ');
// }

// if(scoreJohn> scoreMark)
// {
//     console.log('john\s tea("m wins with ' + scoreJohn + ' points ');
// }
// else if (scoreMark > scoreJohn)
// {
//     console.log ('Mike\'s team win with' + scoreMark + ' points ');
// }
// else
//  {
//    console.log('There is a draw');
// }


/****************
 * functions
 */

// function calculatAge(birthYear)
// {
//     return 2020 - birthYear;
// }
//  var ageRajesh = calculatAge(1997);
//  var ageRavi = calculatAge(1995);
//  var ageShiva= calculatAge(1992);
//  console.log(ageRajesh, ageRavi, ageShiva);

 
// function yearUntilRetirement(year, firstname)
// {
//     var age = calculatAge(year);
//     var retirement = 65 - age;


// console.log(firstName + ' retires in ' + retirement + ' years. ');
// }

// yearsUntilRetirement(1990,'shiva');
// yearUntilRetirement(1995,'ravi');
// yearUntilRetirement(1997, 'rajesh');


/******
 * functions and expressions
 */

//  var whatDoYouDo = function(job, firstName){
//   switch(job){
//       case 'teacher':
//         return firstName + ' teaches kids how to code';

//       case 'driver':
//         return firstName + ' drives a car in lisbon ';

//       case 'designer':
//         return firstName + ' designs beautiful websites ';
//         default:
//             return firstName + 'does something else '
  
//     }
//  }
// console.log(whatDoYouDo('teacher','shiva'));
// console.log(whatDoYouDo('driver','ravi'));
// console.log(whatDoYouDo('designer','rajesh'));

/*****
 * Arrays
 */
 // Initialize new array 
//  var names = ['shiva', 'ravi', 'rajesh'];
//  var years = new Array(1992, 1995, 1997);

//  console.log(names[2]);
//  console.log(names.length);

// mutate array data
//  names[1] = 'Ben';
//  names[names.length] = 'mary';
//  console.log(names);

 //Different data types

// var john = ['john', 'smith', 1990, 'designer', false];
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer'
// : 'john is a designer';
// console.log(isDesigner);

// function tipCalculator(bill) {
//     var percentage;
//     if(bill<50){
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200){
//         percentage = .15;
//     }else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
 
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]), tipCalculator(bills)[2]];

//  var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, finalValues);


/*****
 * Objects and properties
 */
//  var john = {
//      firstName: 'john',
//      lastName: 'smith',
//      birthYear: 1990,
//      family: ['shiva' , 'ravi' , 'rajesh'],
//      job: 'teacher',
//      isMarried: false
//  };
//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.name = 'jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'smith';
// console.log(jane);

/*****************
 * objects and methods
 */



// var john = {
//     firstName: 'john',
//     lastName: 'smith',
//     birthYear: 1992,
//     family: ['shiva' , 'ravi' , 'rajesh'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear){
//         this.age = 2018 - this.birthYear;
//     }

// };
// john.calcAge();
// console.log(john);


// var john = {
//     fullName:'john smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }



// var mark = {
//     fullName:'mark miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// } 


// if ( john.calcBMI() > mark.calcBMI()){
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
//     }else if (mark.bmi > john.bmi){
//         console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
//     }else {
//         console.log(' they have the same BMI');
//     }



/*********
 * Loops and iterations
 */

// for (var i = 1; i <= 20; i += 2) {
//     console.log(i);
// }


// var john = ['john', 'smith', 1990, 'designer', false];

// for (var i = 0; i< john.length; i++){
//     console.log(john[i]);
// }

// var i = 0;
// while (i < john.length){
//     console.log(john[i]);
//     i++;
// }


// var john = ['john', 'smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i< john.length; i++){
//     if (typeof john [i] !== 'string') continue;
//   console.log(john[i]);

// }


// for (var i = 0; i< john.length; i++){
//     if (typeof john [i] !== 'string') break;
//   console.log(john[i]);

// }

// //looping backward

// for 
// (var i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }

// var john = {
//     fullName: 'john smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function(){
//         this.tips = [];
//         this.finalValues = [];

//         for(var i = 0; i < this.bills.length; i++){
//             var percentage;
//             var bill = this.bills[i];

//             if(bill[i] < 50 ) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill[i] < 200){
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             } 
//                  this.tips[i] = bill * percentage;
//                  this.finalValues[i] = bill + bill * percentage;     
//         }

//     }
// }
  
// var mark = {
//     fullName: 'mark miller',
//     bills: [77, 475, 268, 110, 45],
//     calcTips: function(){
//         this.tips = [];
//         this.finalValues = [];

//         for(var i = 0; i < this.bills.length; i++){
//             var percentage;
//             var bill = this.bills[i];

//             if(bill[i] < 100 ) {
//                 percentage = .2;
//             } else if (bill >= 100 && bill[i] < 300){
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             } 
//                  this.tips[i] = bill * percentage;
//                  this.finalValues[i] = bill + bill * percentage;     
//         }

//     }
// }

//  function calAverage(tips){
//      var sum = 0;
//      for (var i = 0; i < tips.length; i++);{
//         sum = sum + tips[i];
//      }
//     return sum / tips.length;
//  }

// john.calcTips();
// john.calcTips();


// john.average = calAverage(john.tips);

// mark.average = calAverage(mark.tips);

// console.log(john,mark);








































































































































































































