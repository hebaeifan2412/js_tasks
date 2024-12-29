/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(job_title,geographic_location,partners_name,number_of_children)
{
 return console.log(`You will be a ${job_title} in ${geographic_location} , and married to ${partners_name} with ${number_of_children} kids.`);
}
let info=tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(y){
   
  console.log( `Your doggie is ${y*7} years old in dog years!`);
}
calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function culateSupply (age,day){
if(age<=100){
  console.log((100-age) *365*day);
}
}
culateSupply(30, 3);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  return console.log(`Hello ${name}`);
}
greet("Adam");
/*
5
what is the error:
function double(x) {
  return 2 * x;
}

function double() {
  return 2 * 7;
}

function double(x) {
  return 2 * x;
}
*/



/*
6
fix these functions:
function double1(x)
  return 2 * x ;
}

function double2 (x)
return 2 * x;
}

function double3 (x) {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
cube(4);

function cube(n){
  console.log(n*n*n);//n**3
  console.log(Math.pow(n,3));
}
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(n , m){
  console.log(m*n);
}
multiply(3,4)
multiply(5,4)
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
 if( age>=20){
  console.log("yes you can");
 }
else 
console.log(`please come back after ${20-age} years to get one`);

}
canIGetADrivingLicense(22);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(s1 , s2){
  console.log( s1.length === s2.length);
}
sameLength("tree","car")
sameLength("tree","clue")
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function  largerNubmer(n1 ,n2) {
n1>=n2? console.log(n1): console.log(n2);
}
largerNubmer(5,3);
largerNubmer(5,6);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function  smallerNubmer(n1,n2,n3){
  n1<=n2 && n1<=n3? console.log(n1):n2<=n1 && n2<=n3? console.log(n2):console.log(n3);
}
function  smallerNubmer(n1,n2,n3){
  n1<=n2 && n1<=n3? console.log(n1):n2<=n1 && n2<=n3? console.log(n2):console.log(n3);
}

function s(...n){
  var min ;
  for( let i=0 ;i<n.length;i++){
    
   if(n[i+1]<n[i]){
      min=n[i+1];
   }
   
  }
  console.log(min);

}
s(7,2,3);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1,s2,s3,s4,s5){
  let arr= [s1,s2,s3,s4,s5];
  let short=arr[0];
  for(let i=0 ; i<=arr.length ;i++){
    if( arr[i].length<=short.length){
        short=arr[i];
  }}
  console.log( short);
}
shorterString("air","tr","car","github","by");
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function  longestString(s1,s2,s3,s4,s5){
  
 
}
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function  isEven(n){
  return n%2==0;
}
console.log(isEven(1)); 
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function  isOod(n){
  return n%2==1;
}
console.log(isOod(1));
/*
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(n){
  console.log(Math.abs(n));
}
positive(-5);

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname , lname){
  console.log(`${fname} ${lname}`);
}
fullName("Alex", "Mercer");
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1,n2,n3,n4,n5){
 console.log ((n1+n2+n3+n4+n5)/5);
}
average(5,7,9,3,5);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  console.log(toFixd(Math.random()))
}
randomNumber();
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min , max){
return Math.random() * (max - min) + min;
}
randomBetweenNumbers(3,100);
randomBetweenNumbers(1,8);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function  scoreInUniversty(mark){
  if(mark>=95&& mark<=100){
    console.log("A");
  }
  else if (mark>=85&& mark<=94){
    console.log("B");
  }
  else if (mark>=70&& mark<=84){
    console.log("C");
  }
  else if (mark>=50&& mark<=69){
    console.log("D");
  }
  else{
    console.log("F");
  }
}
scoreInUniversty(96);
scoreInUniversty(3);
scoreInUniversty(71);
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let v=0;
function counter(){
 return console.log( ++v);
}
counter();
counter();
counter();

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  console.log(`${v} and the counter reset now`);
  v=0;
}
resetCounter()
 counter()
 counter()
 counter()
 resetCounter()
 counter()
 counter()
 resetCounter()
 counter()
