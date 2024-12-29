// 1-Write a function to find the largest element in an array.
var arr1=[5,7,10,2,1,5];
var max=arr1[0];
function largest(arr){
for (let i=0; i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
}
largest(arr1);

// 2-Write a function to find the smallest element in an array.

var min=arr1[0];
function smallest(arr){
for (let i=0; i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        min=arr[i+1];
    }
}
console.log(min);
}
smallest(arr1);


// 3-Write a function to find the sum of all elements in an array.
function all(arr){
    sum=0;
    for(let i=0; i<arr.length ; i++){
sum+=arr[i];
    }
    console.log(sum);
}
all(arr1);


// 4-Write a function to find the average of all elements in an array.
function avg(arr){
     var sum=0;
    for(let i=0; i<arr.length ; i++){
      sum+=arr[i];

    }
    console.log(sum/arr.length);
}
avg(arr1);
// 5-Write a function to find the median of all elements in an array.
function med(arr){
    let a=Array.from(arr).sort(arr);
    if(arr.length%2==1){
        console.log(arr[Math.trunc(arr.length/2)]) ;
}
    else{
        var median ;
        median=(arr[(arr.length/2)-1]+arr[arr.length/2])/2;
        console.log( median );
    }

    

}
med(arr1);

// 6-Write a function to remove all duplicates from an array.
let arr2=[2,3,4,5,5,6,2,7,8];
function duplicates(arr){
for(let i=0 ; i<arr.length ; i++){
    let x=arr[i];
    for(let j=0 ; j<arr.length ; j++){
        if(x==arr[j]){
           arr[j].
        }
    }
}
console.log(arr);

}
duplicates(arr2);

// 7-Write a function to sort an array in ascending order.
let arr3=[2,3,4,5,5,6,2,7,8];


// 8-Write a function to sort an array in descending order.


// 9-Write a function to shuffle the elements of an array randomly.

var myArray = [50, 20, 40, 30, 10, 70];

shuffle(myArray);

function shuffle(myArray) {
  let shuffledArry = [];
  let usedIndex = [];

  let i = 0;
  while (i < myArray.length) {
    let randomNumber = Math.floor(Math.random() * myArray.length);
    if (!usedIndex.includes(randomNumber)) {
      shuffledArry.push(myArray[randomNumber]);
      usedIndex.push(randomNumber);
      i++;
    }
  }
  console.log(shuffledArry);
  return shuffledArry;
}
