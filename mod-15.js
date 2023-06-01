// swap/ exchange the value
var a = 5;
var b = 7;

console.log("before swap : a=",a ,"b =" , b);

var temp = a;
a = b;
b = temp;
console.log("after swap : a=",a ,"b =" , b);

// another system
var x = 5;
var y = 7;
x = x+y;
y = x-y;
x = x-y;
console.log("after swap : x=",x ,"y =" , y);

// programming language

var p = 5;
var q = 7;
[p ,q] = [7 , 5];
console.log("after swap : p=",p ,"q =" , q);

// random number

var num = 2.12458;
var result = Math.floor(num);
var result2 = Math.random(num);
var result3 = Math.ceil(num);
console.log(result);
console.log(result2);
console.log(result3);


// for random number

var randomNumber = Math.random() * 10;
var output = Math.round(randomNumber);
console.log(output);

// for dice

var randomNumber = Math.random() *6;
var output = Math.round(randomNumber);
console.log(output);

// by for loop

for ( i = 0; i < 10 ; i++) {
    var randomNumber = Math.random() *10;
var output = Math.round(randomNumber);
console.log(output);

}

// maximum  and minimum value

var business = 550;
var minister = 450;
var shochib = 300;

var max = Math.max(business,minister, shochib);
console.log(max);
var min = Math.min(business,minister, shochib);
console.log(min);

// another way

function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));

// minimum value

function min_of_three(x, y, z) 
 {
  min_val = 0;
  if (x < y)
  {
    min_val = x;
  } else
  {
    min_val = y;
  }
  if (z < min_val) 
  {
    min_val = z;
  }
  return min_val;
}

console.log(min_of_three(1,0,1));
console.log(min_of_three(0,-10,-20));
console.log(min_of_three(1000,510,440));

// max no of a array

var marks = [45 , 50 ,23 ,67 , 90 ,70 ,23];
var max = marks[0];

for ( i =0 ; i < marks.length; i++){
  var element = marks[i];
  if ( element >max){
    max = element;
  }

 
}
 console.log("highest value is :",max);

//  array sum 

var sumOfNumber = [34 , 45 , 56 , 67 , 58 ,78 ];
var sum = 0; 
for( i=0; i < sumOfNumber.length; i++ ){
   var element = sumOfNumber[i];
   sum = sum + element + element ;
}
console.log("total of array:",sum);

// total by function 
function numbers(num){
  var sum = 0; 
for( i=0; i < sumOfNumber.length; i++ ){
   var element = sumOfNumber[i];
   sum = sum + element + element ;
}
return sum ;
}
var num = [ 45 , 56 ,57 ,78 , 20 , 78];
var result = numbers(num);

console.log("total of array:", result);

// unique name of elements sorting 

var number = [ 23 , 34 , 34 , 56 ,12 , 21, 34 , 23 ];
var uniqueNumber = [];

for ( i = 0; i < number.length; i++){
  var element = number [i];
  var index = uniqueNumber.indexOf(element);
  if (index === -1){
    uniqueNumber.push(element);
  }
  
}
console.log(uniqueNumber);

// unique number by function 

// function number(num1){
//   var unique = [];
  
//   for ( i = 0; i< num1.length; i++){
//     var element = num1[i];
//     var index = unique.indexOf(element);
//     if( index === -1){
//      unique.push(element);
          
//     }  }

//     return unique;
 


// }
//  var num = [ 23 , 23 , 45, 45, 67, 67 , 67, 90];
// var result = number(num);
// console.log(result);
 
// word count 

var wordCount = " I am a sinner slave of Almighty Allah";

var count = 0;

for( i = 0; i< wordCount.length; i++){
   var character = wordCount[i];
       if( character = " " && wordCount[i-1] != " "){
          count ++;
       }
       count ++;
      //  for the space at the last 
       

}
console.log(count);

// reverse statement

var statement = " Are you kidding me";
function reverseString(str){
  var reverse = "";
  for ( i =0 ; i<str.length ; i++){
    var character = str[i];
    reverse = character + reverse;
  }
  return reverse;
}

var result = reverseString(statement);
console.log(result);

// unique number by function 


 function number(num1){
   var unique = [];
  
  for ( i = 0; i<num1.length; i++){
    var element = num1[i];
    var index = unique.indexOf(element);
   if( index === -1){
     unique.push(element);
          
    }  }

    return unique;
 


}

 var result = number(num1);
 console.log(result);












