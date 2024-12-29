console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7 , 9, 45 ]

 ["Str" "alex","moh"]

 'the','fox' ,'over' , lazy, 'dog'  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let food =[ "f1","f2","f3","f4","f5"];
let Sport =[ "s1","s2","s3"];
let Movie =[ "m1","m2","m3","m4"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr){
let first=arr[0];
return first;
}
console.log(firstOfArray([1,4,5]));
console.log(firstOfArray(["t","u","g","x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function  lastOfArray(arr){
let last =arr[arr.length -1];
return last;
}
lastOfArray([1,4,5]);
lastOfArray(["t","u","g","x"]);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9] ; 
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/



/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
  
    if(arr.length%2==1){
return arr[Math.floor(arr.length/2)];
}
else {
    return `${arr[(arr.length/2)-1]} and ${arr[arr.length/2]} `;
}
}
console.log(middleOfArray(["t","u","g","x"]) );
console.log(middleOfArray([1,4,5]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]=animals[1]+'phant';
animals.pop();
console.log(animals);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9];

function indexOfArray(arr,index){
return arr[index];
}
console.log (indexOfArray(nums,3));
console.log (indexOfArray(nums,1));
console.log (indexOfArray(nums,4));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums= [1,2,3,8,9];
function  arrayExceptLast(arr){

console.log(arr.slice(0, -1));
}
arrayExceptLast(nums) 

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd( arr ,value){
    arr[arr.length]=value;
    return arr;
}
console.log(addToEnd(nums,55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums1= [1,2,3,8,9];
function sumArray(arr){
    let sum=0;
    // for(let i=0 ;i<arr.length ; i++){
    //     sum+=arr[i];
    // }

    let i=0;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
    return sum ;

}
console.log( sumArray(nums1) );

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function minInArray(arr){
   let min=arr[0];
// for( let i=0; i<arr.length ; i++){
// if (arr[i] <min){
//     min=arr[i];
//     }
// }
let i=0;
while(i<arr.length){

    if(arr[i] < min){
         min=arr[i];}
 i++;  
}
return min ;
}
console.log(minInArray(nums1));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
nums3= [1,2,3,8,9];
function  removeFromArray( arr,ele){
    var x=arr.indexOf(ele);
    arr.splice(x, 1);
   
    return arr;
}
console.log(removeFromArray(nums3,8));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums4= [1,2,3,8,9];
function oddArray(arr){
 let array=[];
// for(let i=0; i<arr.length ; i++){
//     if (arr[i]%2==1){
//         array.push(arr[i]);
//     }
// }
let i=0;
while(i<arr.length){
    if (arr[i]%2==1){
       array.push(arr[i]);
}
i++;}
return array ;
}
console.log(oddArray(nums4) );
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums5= [1,2,3,8,9];
var nums6= [1,2,3,8,9,77];
function aveArray(arr){
    let sum=0;
    // for(let i=0; i<arr.length ; i++){
    //  sum+=arr[i];
    // }
    

    let i=0;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
     let re=sum/arr.length;
    return re ;
}
console.log(aveArray(nums5));
console.log(aveArray(nums6));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(arr){
    let  min=arr[0].length;
    let     m=0;
//  for(let i=0 ; i<arr.length ; i++){

//     if(arr[i].length<min){
//         min=arr[i].length;
//         m=i;
//     }
//  }
 let i=0;
 while(i<arr.length){
    if(arr[i].length<min){
        min=arr[i].length;
        m=i;
    }
    i++;
 }
    return arr[m] ;
}
console.log( shorterInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6==>8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string= "alex mercer madrasa rashed2 emad hala";
function repeatChar(str,c){
   let counter=0;
for(let i=0 ; i<str.length ; i++){
    if (str[i]===c){
        counter++;
    }
}

    return counter ;
}
console.log(  repeatChar(string,"a"));
console.log(  repeatChar(string,"z"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings1= ["alex","mercer","madrasa","rashed2","emad","hala"];
function evenIndexOddLength(arr){
    let str1=[];
    for(let i=0; i<arr.length;i++ ){
        if (i%2==0){
            if()
        }
    }

}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
